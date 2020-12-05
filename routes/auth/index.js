const router = require("express").Router();
const User = require("../../schemas/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const checkAuth = require("../../utils/checkAuth");

router.post("/register", async (req, res) => {
    let { name, email, password } = req.body;

    const registered = await User.findOne({ email });

    if (registered) {
        res.status(400).json({ err: "Already registered" });
        return;
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    password = hash;

    const user = new User({
        name,
        email,
        password,
    });

    user.save((err) => {
        if (err) throw err;
        res.status(200).send("Registered");
    });
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        res.status(401).json({
            err: "Wrong Email/Password",
        });
        return;
    }

    const validPass = await bcrypt.compare(password, user.password);

    if (!validPass) {
        res.status(401).json({
            err: "Wrong Email/Password",
        });
        return;
    }

    jwt.sign(
        { email: user.email, name: user.name },
        process.env.JWT_SECRET,
        (err, token) => {
            if (err) throw err;
            res.cookie("token", token, { maxAge: 900000, httpOnly: true });
            res.status(200).json(token);
        }
    );
});

router.get("/status", checkAuth, (req, res) => {
    res.status(200).json({
        status: "Logged",
    });
});

router.get("/logout", checkAuth, (req,res) => {
    res.cookie("token", "");
    res.status(200)
})

router.get("/name", (req,res) => {
    jwt.verify(req.cookies.token, process.env.JWT_SECRET, (err,decoded) => {
        if (err) return;
        res.status(200).send(decoded.name)
    })
})

module.exports = router;

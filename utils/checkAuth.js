const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
    console.log(req.cookies.token);
    jwt.verify(req.cookies.token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(401).json({
                status: "Not authorized",
            });
            return;
        }
        next();
    });
};

module.exports = checkAuth;

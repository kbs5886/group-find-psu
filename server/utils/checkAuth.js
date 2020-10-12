const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
    console.log(req.body.token);
    jwt.verify(req.body.token, process.env.JWT_SECRET, (err, decoded) => {
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

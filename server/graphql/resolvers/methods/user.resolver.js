const User = require("../../../models/User");

const users = async () => {
    const data = await User.find((err) => {
        if (err) throw err;
    });
    data.map((d) => (d.password = null));

    return await data;
};

const createUser = async (props) => {
    const user = new User({
        name: props.user.name,
        email: props.user.email,
        password: props.user.password,
    });
    const data = await user.save();
    data.password = null;
    return await data;
};

const login = async (props) => {
    const { email, password } = props.login;
    const user = await User.findOne({ email: email });
    if (!user) {
        throw new Error("Email not found");
    }

    if (!(user.password === password)) {
        throw new Error("Wrong email/pass");
    }
    user.password = null;
    return user;
};

module.exports = {
    users,
    createUser,
    login,
};

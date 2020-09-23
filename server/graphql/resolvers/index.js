const { createTeam, teams } = require("./methods/team.resolver");
const { users, createUser, login } = require("./methods/user.resolver");

module.exports = {
    teams: (props, args) => teams(props, args),
    createTeam: (props, args) => createTeam(props, args),

    users: users,
    createUser: (props) => createUser(props),
    login: async (props) => login(props),
};

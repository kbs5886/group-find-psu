const { buildSchema } = require("graphql");
const userType = require("./types/user.type");
const teamType = require("./types/team.type");

module.exports = buildSchema(`

    ${userType}

    ${teamType}

    type Query{
        teams: [Team!]!
        users: [User!]!
        login(login: userLogin): User
    }

    type Mutation {
        createTeam(team: teamInput): Team
        createUser(user: userInput): User
    }

    schema {
        query: Query
        mutation: Mutation
    }
`);

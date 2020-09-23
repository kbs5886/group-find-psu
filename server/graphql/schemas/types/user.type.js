module.exports = `

type User {
    _id: ID!,
    name: String!
    email: String!
    password: String
    createdAt: String!
    updatedAt: String!
}

input userInput {
    name: String!
    email: String!
    password: String!
}

input userLogin {
    email: String!
    password: String!
}
`;

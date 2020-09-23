module.exports = `
type Team {
    _id: ID!,
    name: String!
    description: String!
    owner: String!
    members: [String]
    applicants: [String]
    createdAt: String!
    updatedAt: String!
}

input teamInput {
    name: String!
    description: String!
    owner: String!
}
`;

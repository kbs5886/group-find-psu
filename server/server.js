require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const graphqlSchema = require("./graphql/schemas");
const graphqlResolvers = require("./graphql/resolvers");
const cookieParser = require("cookie-parser");

const connectDB = require("./utils/connectDB");

const app = express();

connectDB();

app.use(cookieParser());

app.use("/graphql", (req, res) => {
    return graphqlHTTP({
        schema: graphqlSchema,
        rootValue: graphqlResolvers,
        graphiql: true,
        context: { req, res },
    })(req, res);
});

app.listen(process.env.PORT, () =>
    console.log(`Server is running on http://localhost:${process.env.PORT}`)
);

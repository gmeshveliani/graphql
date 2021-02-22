const express = require('express');
const graphqlHTTP = require('express-graphql');
const {importSchema} = require('graphql-import');
const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require('./resolvers');
const {vehicleRouter, weaponRouter} = require('./routers');
const app = express();

const typeDefs = importSchema('./src/schema.graphql');

const schema = makeExecutableSchema({typeDefs, resolvers});

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.use('/person', weaponRouter);
app.use('/person', vehicleRouter);

app.listen(3000, () => console.log('listening on port 3000'));

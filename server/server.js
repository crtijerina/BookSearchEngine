let express = require('express');
let path = require('path');

let { ApolloServer } = require('apollo-server-express');
let { authMiddleware } = require('./utils/auth');


let db = require('./config/connection');
let { typeDefs, resolvers } = require('./schemas');

let app = express();
let PORT = process.env.PORT || 3001;

let server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
});


server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
});

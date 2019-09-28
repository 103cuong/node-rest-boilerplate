import 'dotenv/config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import signale from 'signale';
import apiRoute from './routes';
import schema from './graphql';
import config from './config';

// Initialize app.
const app = express();

// Routes.
app.get('/', (req, res) => res.send('<p>👋 Xin chào</p>'));
app.use('/api', apiRoute);

// Initialize apollo server.
const server = new ApolloServer({ schema });

// Apply middleware.
server.applyMiddleware({ app, cors: true });

// Start server.
app.listen(config.port, () =>
  signale.debug(`Server started on http://localhost:${config.port}${server.graphqlPath}`),
);

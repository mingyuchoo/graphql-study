import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';

import schema from './schema';

const port = process.env.PORT || 4000;

const app = express();
app.use('*', cors());

const server = new ApolloServer({
  schema,
});

server.applyMiddleware({
  app: app,
  path: '/graphql',
  onHealthCheck: () => {
    return new Promise((resolve, reject) => {
      //database check or other asynchronous action
      // Replace the `true` in this conditional with more specific checks!
      if (true) {
        console.log('health check called');
        resolve(0);
      } else {
        console.log('health check failed');
        reject(-1);
      }
    });
  },
});

app.listen(port, () => {
  console.log(`Apollo server listening at ${port}`);
});

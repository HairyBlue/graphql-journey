import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import  { typeDefs }  from "./graphql/types/index.js"
import { resolvers } from './graphql/resolvers/index.js';

const server = new ApolloServer<{}>({
   typeDefs,
   resolvers,
 });
 
const { url } = await startStandaloneServer(server, {
   listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);

process
   .on('unhandledRejection', (reason, p) => {
   console.error(reason, 'Unhandled Rejection at Promise', p);
   console.error(reason);
   console.error(reason, 'Unhandled Rejection at Promise', p);
   })
   .on('uncaughtException', function (exception) {
   console.error(exception, 'Fatal Uncaught exception: ');
   // process.exit(1);
   });
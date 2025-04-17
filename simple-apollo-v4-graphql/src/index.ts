import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import  { typeDefs, resolvers }  from "./graphql/index.js"

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
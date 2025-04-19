import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs, resolvers } from "./graphql/index.js";

const server = new ApolloServer<{}>({
  typeDefs,
  resolvers: resolvers as any,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);

process
  .on("unhandledRejection", (reason, p) => {
    console.error("Unhandled Rejection at Promise", p);
    console.error(reason);
  })
  .on("uncaughtException", function (exception) {
    console.error(exception, "Fatal Uncaught exception: ");
    // process.exit(1);
  });

export { server };

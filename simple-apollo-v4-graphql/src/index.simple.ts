import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import * as db from "./mock-data.js";

const typeDefs = `#graphql
   enum Gender {M, F}

   type DummybatchUser {
      id: ID!, # entarnal communication only
      uuid: String!
      name: String!
      gender: Gender!
      profile: String
   }

   type Testimonial {
      uuid: String!
      userSaid: String
   }

   scalar uuid

   input uuid_comparison {
      _eq: uuid,
      _in: [uuid!]
      _neq: uuid
   }

   input search_user {
      uuid: uuid_comparison
   }

   type Query {
      dummyBatchUser: [DummybatchUser],
      testimonial: [Testimonial],
      searchUser(where: search_user!): [DummybatchUser!]!
   }
`;

function searchUser(_: any, arg: any) {
  const _eq = arg?.where.uuid._eq;

  const out: any = [];

  if (_eq) {
    const find = db.dummyBatchUser.find((val) => val.uuid == _eq);
    if (find) out.push(find);
  }

  return out;
}

function dummyBatchUser() {
  return db.dummyBatchUser;
}

const resolvers = {
  Query: {
    dummyBatchUser,
    searchUser,
  },
};

const server = new ApolloServer<{}>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);

process
  .on("unhandledRejection", (reason, p) => {
    console.error(reason, "Unhandled Rejection at Promise", p);
    console.error(reason);
    console.error(reason, "Unhandled Rejection at Promise", p);
  })
  .on("uncaughtException", function (exception) {
    console.error(exception, "Fatal Uncaught exception: ");
    // process.exit(1);
  });

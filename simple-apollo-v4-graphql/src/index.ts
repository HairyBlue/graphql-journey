import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import * as db from "./db.ts";

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
`

type DummyBatchUser = {
      id: number,
      name: string,
      gender: string,
      profile: string | null
}[]


type SearchUserArg = {
   where: {
      uuid: {
         _eq?: string
         _in?: string[]
         _neq?: string
      }
   }
}

const resolvers = {
   Query: {
      searchUser(_: any, arg: SearchUserArg) {
         const { _eq, _in } = arg?.where?.uuid;

         let out: DummyBatchUser = [];

         if (_eq) {
            const find = db.dummyBatchUser.find(val => val.uuid == _eq);
            if (find)
               out.push(find);
         }


         return out;
      }
   }
}

const server = new ApolloServer({
   typeDefs,
   resolvers,
 });
 

 const { url } = await startStandaloneServer(server, {
   listen: { port: 4000 },
 });
 
 console.log(`🚀  Server ready at: ${url}`);
module.exports = `#graphql
   enum Gender {M, F}
   scalar uuid
   type DummybatchUser {
      id: ID! # entarnal communication only
      uuid: String!
      name: String!
      gender: Gender!
      profile: String
   }

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
      searchUser(where: search_user!): [DummybatchUser!]!
   }
`
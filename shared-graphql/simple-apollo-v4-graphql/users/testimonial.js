module.exports = `#graphql
   type Testimonial {
      uuid: String!
      userSaid: String
   }

   type Query {
      testimonial: [Testimonial],
   }
`;


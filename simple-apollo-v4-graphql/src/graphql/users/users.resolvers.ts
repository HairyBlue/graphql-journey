import * as db from "../../mock-data.js"

function searchUser(_: any, arg: DummyBatch.SearchUserArg) {
   const { _eq, _in } = arg?.where?.uuid;

   let out: DummyBatch.User = [];

   if (_eq) {
      const find = db.dummyBatchUser.find(val => val.uuid == _eq);
      if (find)
         out.push(find);
   }

   return out;
}

function dummyBatchUser() {
   return db.dummyBatchUser;
}

function testimonial() {
   return db.testimonial;
}

const resolvers = {
   query_root: {
     searchUser,
     dummyBatchUser,
     testimonial
   },
 };
 
 export default resolvers;
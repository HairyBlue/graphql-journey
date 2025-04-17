import * as db from "../../../../db.js"

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


const resolvers = {
   Query: {
     searchUser,
     dummyBatchUser,
   },
 };
 
 export default resolvers;
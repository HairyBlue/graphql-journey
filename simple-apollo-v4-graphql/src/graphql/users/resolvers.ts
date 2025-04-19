import * as db from "../../mock-data.js"
import { PublicUser, Resolvers, User } from "../../resolvers.generated.js";


const resolvers: Resolvers = {
   QueryRoot: {
      user: (_: any, {where: { uuid }}) => {
           const _eq = uuid?._eq;

            let out: PublicUser[] = [];

            if (_eq) {
               const find: PublicUser | undefined = db.dummyBatchUser.find(val => val.uuid == _eq) as PublicUser;
               if (find)
                  out.push(find);
            }

            return out;
      },
      users: () => {
         return db.dummyBatchUser as PublicUser[];
      }
   }
 };
 
 export default resolvers;
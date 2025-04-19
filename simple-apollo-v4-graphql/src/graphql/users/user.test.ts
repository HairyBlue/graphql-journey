import { beforeAll, describe, it, expect} from 'vitest'
import { server } from "../../index.js"
import * as db from "../../db.js"

describe("Test graphql on user data", () => {
   it("Should get dummybatch user", async () => {
      const response = await server.executeOperation({
         query: `query Dummybatch {
            dummyBatchUser {
               name,
               id,
               uuid,
               gender,
               profile
            }
         }
         `
      })

      if (response.body.kind === "single") {
         const data: any = response.body.singleResult.data;
         const dataStr = JSON.stringify(data.dummyBatchUser);

         expect(dataStr).toEqual(JSON.stringify(db.dummyBatchUser))
      } else {
         console.log(response.body.kind);
      }

   })
})
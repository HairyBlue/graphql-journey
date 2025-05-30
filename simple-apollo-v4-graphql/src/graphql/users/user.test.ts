import { describe, it, expect } from "vitest";
import { server } from "../../index.js";
import * as db from "../../mock-data.js";

describe("Test graphql on user data", () => {
  it("Should get dummybatch user", async () => {
    const response = await server.executeOperation({
      query: `query Dummybatch {
            users {
               name,
               uuid,
               gender,
               profile
            }
         }
         `,
    });

    if (response.body.kind === "single") {
      const data: any = response.body.singleResult.data;
      const dataStr = JSON.stringify(data.users);
      const fromDb = JSON.stringify(db.dummyBatchUser);

      expect(dataStr).toEqual(fromDb);
    } else {
      console.log(response.body.kind);
    }
  });
});

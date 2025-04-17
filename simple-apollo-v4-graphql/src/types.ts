declare namespace DummyBatch {
   type User = {
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
}
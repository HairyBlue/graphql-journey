import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import * as path from "path";
import { fileURLToPath } from 'url';
import { loadFilesSync } from "@graphql-tools/load-files";

import users from "./users/users.resolvers.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const typesArray = loadFilesSync(path.join(__dirname,  '**/*.graphql'))
const typeDefs = mergeTypeDefs(typesArray);


const resolversArray = [users];
const resolvers = mergeResolvers(resolversArray);

export {
   typeDefs,
   resolvers
}
import * as path from "path";
import { pathToFileURL } from "url";
import { fileURLToPath } from 'url';
import { loadFilesSync, loadFiles } from "@graphql-tools/load-files";
import { mergeResolvers } from "@graphql-tools/merge";

import users from "./users/users.resolvers.js"


// !!! DO NOT COMPLICATE THINGS
// import { print } from "graphql";
// import * as fs from "fs";

// const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
// const __dirname = path.dirname(__filename); // get the name of the directory

// const resolversArray  = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'))
// export const resolvers = mergeResolvers(resolversArray);


// async function getResolvers() {
//    const resolversPath = path.join(__dirname, "resolvers", "**", "*.resolvers.js");
//    try {
//      const resolversArray = await loadFiles(resolversPath, {
//        useRequire: true,
//        requireMethod: async (path: any) => {
//          console.debug("Loading resolver at:", path);
//          const module = await import(pathToFileURL(path) as any);
//          return module.default || module; // Handle default exports
//        },
//      });
//      console.log("Loaded resolvers:", resolversArray);
//      return mergeResolvers(resolversArray);
//    } catch (error) {
//      console.error("Error loading resolvers:", error);
//      throw error;
//    }
//  }

// export const resolvers = await getResolvers();

// const pattern = path.join(__dirname, "./**/*.resolvers.js");
// // Convert it to file:// URL format
// const urlPattern = pathToFileURL(pattern).href;

// const resolversArray = await loadFiles(urlPattern, {
//   extensions: ["js"],
// });

// const resolvers = mergeResolvers(resolversArray);

const resolversArray = [users]
 
export const resolvers = mergeResolvers(resolversArray)

import { add, printName } from "./importMe.mjs";
import * as fs from "fs";

//!             Import                         vs                           Require
//? Import is lexical, runs at beginning, cannot be                Require can be called anywhere in the app
//? called conditionally

//? modules must be saved with .mjs extension                      Module must be saved with .js ext

//? NOT RECOMMENDED                                                       RECOMMENDED

console.log(add(1, 2));
console.log(printName("Yitz"));
fs.writeFileSync("text.txt", "Test");

"use strict";
const Discord = require("./index.js");
const Types = Discord.Command.Argument.Types;

let test = new Types(Types.FLAGS.STRING, Types.FLAGS.NUMBER, "number");

console.log(test.has(Types.FLAGS.NUMBER));

console.log(test.bitfield);

// Discord.login("");

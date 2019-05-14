# FFG-Framework
[![Build Status](https://api.travis-ci.org/NegativeThree/FFG-Framework.svg?branch=master)](https://api.travis-ci.org/NegativeThree/FFG-Framework)
The Multitude of Frameworks by FFGFlash

Frameworks
: [ffg-framework/discord.js](## /discord.js)
: [ffg-framework/console.js](## /console.js)

## /discord.js
### An expansion on the already existing Discord.JS library to make bots quicker and easier.
#### Example
```js
"use strict";
const Discord = require("ffg-framework/discord.js");
```
Contributors
: FFGFlash

## /console.js
### An expansion of the built-in JavaScript console
#### Example
```js
"use strict";
const Console = require("ffg-framework/console.js");
const con = new Console();

con.log("Hello World,");
con.warn("Warning: Error Up Ahead...");
con.error("We Warned You!");

con.write("This is new...").nl().write("Very New!").warn();

con.log(JSON.stringify(con.logs));
```
Contributors
: FFGFlash

Authors
: FFGFlash

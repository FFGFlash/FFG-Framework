

# FFG-Framework
[![Build Status](https://api.travis-ci.org/NegativeThree/FFG-Framework.svg?branch=master)](https://api.travis-ci.org/NegativeThree/FFG-Framework)
### The Multitude of Frameworks by FFGFlash

#### Authors
- FFGFlash

#### Frameworks
- [ffg-framework/discord.js](#discordjs)
- [ffg-framework/console.js](#consolejs)

## /discord.js
### An expansion on the already existing Discord.JS library to make bots quicker and easier.
#### Example
```js
"use strict";
const Discord = require("ffg-framework/discord.js");
```
#### Contributors
- FFGFlash

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

#### Documentation
```js
/**
 * @author FFGFlash
 * @version 1.0.0
 * @since 1.0.0
 */
console = new Console();

/**
 * Sends a Message to the Console.
 * @param message The Message to Send to the Console.
 * @return undefined.
 */
Console.log(message...);
console.log(message...);

/**
 * Sends an Error Message to the Console.
 * @param message The Error Message to Send to the Console.
 * @return undefined.
 */
Console.error(message...);
console.error(message...);

/**
 * Sends a Warning Message to the Console.
 * @param message The Warning Message to Send to the Console.
 * @return undefined.
 */
Console.warn(message...);
console.warn(message...);

/**
 * Creates a New Console.Message Object.
 * @param message The Message.
 * @return Console.Message Instance.
 */
Console.write(message...);
console.write(message...);

/**
 * An Array Containing All Messages Sent to the Console.
 * Local to the Console instance, or Global if Called Statically.
 */
Console.logs;
console.logs;

/**
 * Message LOG Type.
 */
Console.LOG;

/**
 * Message ERROR Type.
 */
Console.ERROR;

/**
 * Message WARN Type.
 */
Console.WARN;

/**
 * @author FFGFlash
 * @version 1.0.0
 * @since 1.0.0
 * @param console An Instance of Console or Console.
 * @param message The Message Which The Console.Message Object Represents.
 */
message = new Console.Message(console, message);

/**
 * Add to the Message.
 * @param message The Content to Mend to the Message.
 * @return Console.Message Instance.
 */
message.write(message...);

/**
 * Appends Native NewLine Character.
 * @return Console.Message Instance.
 */
message.nl();

/**
 * Sends the Message to the Console as a Message.
 * @return undefined.
 */
message.log();

/**
 * Sends the Message to the Console as an Error Message.
 * @return undefined.
 */
message.error();

/**
 * Sends the Message to the Console as a Warning Message.
 * @return undefined.
 */
message.warn();
```

#### Contributors
- FFGFlash

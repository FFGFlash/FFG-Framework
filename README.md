# /ffg-framework/
[![Build Status](https://api.travis-ci.org/NegativeThree/FFG-Framework.svg?branch=master)](https://travis-ci.org/NegativeThree/FFG-Framework)
### The Multitude of Frameworks by FFGFlash
#### Authors
- FFGFlash
#### Frameworks
- [/ffg-framework/discord.js/](#discordjs)
- [/ffg-framework/console.js/](#consolejs)
- [/ffg-framework/bitdata.js/](#bitdatajs)
## /discord.js/[\.\.](#ffg-framework)
### An expansion on the already existing Discord.JS library to make bots quicker and easier.
#### Contributors
- FFGFlash
#### Example
```js
"use strict";
const Discord = require("ffg-framework/discord.js");
```
## /console.js/[\.\.](#ffg-framework)
### An expansion of the built-in JavaScript console
#### Contributors
- FFGFlash
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
Console.log(...message);
console.log(...message);

/**
 * Sends an Error Message to the Console.
 * @param message The Error Message to Send to the Console.
 * @return undefined.
 */
Console.error(...message);
console.error(...message);

/**
 * Sends a Warning Message to the Console.
 * @param message The Warning Message to Send to the Console.
 * @return undefined.
 */
Console.warn(...message);
console.warn(...message);

/**
 * Creates a New Console.Message Object.
 * @param message The Message.
 * @return Console.Message Instance.
 */
Console.write(...message);
console.write(...message);

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
message.write(...message);

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
## /bitdata.js/[\.\.](#ffg-framework)
### The Bitdata Framework Allows for Easy Creation of Binary Options/Configs.
#### Contributors
- FFGFlash
#### Example
```js
"use strict";
const Bitdata = require("ffg-framework/bitdata.js");

class Example extends Bitdata {
	constructor() {
		super(...arguments);
	}

	static get FLAGS() {
		return {
			OPTION_A	:	0b1,
			OPTION_B	:	0b10,
			OPTION_C	:	0b100
		};
	}
}

let example1 = new Example();
let example2 = new Example();
let example3 = new Example();

example1.add(Example.FLAGS.OPTION_A).add("option_c").remove("option_b");
example2.add(0b10).remove(2).add(0b111);

console.log(example1.toBits(), example1.bitfield);
console.log(example2.toBits(), example2.bitfield);
console.log(example3.toBits(), example3.bitfield);
```

#### Documentation
```js
/**
 * @author FFGFlash
 * @version 1.0.0
 * @since 1.0.0
 * @param FlagResolvable Either a String or Number Which can be Resolved to the Bitfield.FLAGS.
 */
bitdata = new Bitdata(...flags);

/**
 * The Number Representation of the Bitdata.
 */
bitdata.bitfield

/**
 * Resolve the Bitfield to Binary.
 * @return The Bitfield as a Binary String.
 */
bitdata.toBits();

/**
 * Add a Flag to the Bitdata Instance.
 * @param flag A FlagResolvable Value.
 * @return The Bitdata Instance.
 */
bitdata.add(flag);

/**
 * Remove a Flag from the Bitdata Instance.
 * @param flag A FlagResolvable Value.
 * @return The Bitdata Instance.
 */
bitdata.remove(flag);

/**
 * Check if the Bitdata Instance has a Flag.
 * @param flag A FlagResolvable Value.
 * @return A Boolean Whether or not it has the Flag.
 */
bitdata.has(flag);

/**
 * The Bitfield Value of All Flags.
 */
Bitdata.ALL;

/**
 * Resolve a FlagResolvable Value to a Number.
 * @param flag A FlagResolvable Value.
 * @return The Bitfield Value of a FlagResolvable.
 */
Bitdata.serialize(flag);

/**
 * List of FlagResolvables
 */
Bitdata.FLAGS;
```

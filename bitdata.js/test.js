"use strict";
const Bitdata = require("./index.js");

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
console.log(example1.has("OPTION_A"), example1.has("OPTION_B"), example1.has("OPTION_C"));
console.log(example2.has("OPTION_A"), example2.has("OPTION_B"), example2.has("OPTION_C"));
console.log(example3.has("OPTION_A"), example3.has("OPTION_B"), example3.has("OPTION_C"));
console.log(example1.toArray(), example2.toArray(), example3.toArray());

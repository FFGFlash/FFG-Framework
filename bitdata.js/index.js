"use strict";
class Bitdata {
	constructor() {
		this.bitfield = 0;
		let flags = Array.from(arguments);
    for (var i in flags) {
      let flag = this.constructor.serialize(flags[i]);
      this.add(flag);
    }
	}

	toArray() {
		let arr = [];
		for (let k in this.constructor.FLAGS) {
			if (!this.constructor.FLAGS.hasOwnProperty(k)) continue;
			let v = this.constructor.FLAGS[k];
			if (!this.has(v)) continue;
			arr.push(k.toUpperCase());
		}
		return arr;
	}

	toBits() {
		return Number(this.bitfield >>> 0).toString(2);
	}

	add(flag) {
		flag = this.constructor.serialize(flag);
		if (!this.has(flag)) this.bitfield += flag;
		return this;
	}

	remove(flag) {
		flag = this.constructor.serialize(flag);
		if (this.has(flag)) this.bitfield -= flag;
		return this;
	}

	has(flag) {
		flag = Number(this.constructor.serialize(flag) >>> 0).toString(2);
		return Number(this.toBits().substring(this.toBits().length - flag.length, this.toBits().length - flag.length + 1)) === 1;
	}

  static get ALL() {
    let bitfield = 0;
    for (var i in this.FLAGS) {
      bitfield += this.FLAGS[i];
    }
    return bitfield;
  }

	static serialize(flag) {
		if (isNaN(flag)) {
			flag = flag.toUpperCase();
			if (this.FLAGS[flag]) {
				flag = this.FLAGS[flag];
			} else {
				flag = 0b0;
			}
		}

		if (Number(flag >>> 0).toString(2).length > Number(this.ALL >>> 0).toString(2).length) {
			flag = 0b0;
		}

		return flag;
	}

	static get FLAGS() {
		return {}
	}
}

module.exports = Bitdata;

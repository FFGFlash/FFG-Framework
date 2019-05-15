const discord = require("discord.js");
const Bitdata = require("../bitdata.js");
const client = new discord.Client();

class ArgumentTypes extends Bitdata {
  constructor() {
		super(...arguments);
  }

  static parse(value) {
    let type = new ArgumentTypes(ArgumentTypes.FLAGS.STRING);

    if (!isNaN(parseInt(value))) {
      type.add(ArgumentTypes.FLAGS.NUMBER);
    } else if ((/^(true|false|yes|no|t|f|y|n)?$/i).test(value)) {
      type.add(ArgumentTypes.FLAGS.BOOLEAN);
    } else if ((/^\\?<@!?(\d)+>$/i).test(value)) {
      type.add(ArgumentTypes.FLAGS.MENTION);
    } else if ((/^\\?<#(\d)+>$/i).test(value)) {
      type.add(ArgumentTypes.FLAGS.CHANNEL);
    }

    return type;
  }

  static get FLAGS() {
    return {
      "STRING"  : 0b1,
      "NUMBER"  : 0b10,
      "BOOLEAN" : 0b100,
      "MENTION" : 0b1000,
      "CHANNEL" : 0b10000
    };
  }
}

class Argument {
  constructor(name) {
    this.name = name;
    this.description = "No Description Provided.";
    this.optional = false;
    this.type = Argument.Types.ALL;
  }

  set(property, value) {
    this[property] = value;
    return this;
  }

  setOptional(optional) {
    return this.set("optional", optional);
  }

  setName(name) {
    return this.set("name", name);
  }

  setDescription(description) {
    return this.set("description", description);
  }

  setType(type) {
    return this.set("type", type);
  }

  addType(type) {
    this.type.add(type);
    return this;
  }

  removeType(type) {
    this.type.remove(type);
    return this;
  }
}

Argument.Types = ArgumentTypes;

class Command {
	constructor(name) {
		Object.defineProperty(this, "name", {value: name, writable: false});
		this.description = "No Description Provided.";
		this.hidden = false;
		this.arguments = [];

		Command.List[name] = this;
	}

	set(property, value) {
		this[property] = value;
		return this;
	}

	setDescription(description) {
		return this.set("description", description);
	}

	setHidden(hidden) {
		return this.set("hidden", hidden);
	}

	addArgument(argument) {
		this.arguments.push(argument);
		return this;
	}

	removeArgument(index) {
		this.arguments.splice(index, 1);
		return this;
	}
}

Command.Argument = Argument;
Command.List = {};

exports.ArgumentTypes = ArgumentTypes;
exports.Argument = Argument;
exports.Command = Command;
exports.login = token => client.login(token);

const discord = require("discord.js");
const client = new discord.Client();

class ArgumentTypes {
  constructor() {
    this.bitfield = 0;
    let ArgumentTypes = Array.from(arguments);
    for (var i in ArgumentTypes) {
      let type = ArgumentTypes.serialize(ArgumentTypes[i]);
      this.add(type);
      if (this.has(type)) continue;
      this.bitfield += type;
    }
  }

  toBits() {
    return Number(this.bitfield >>> 0).toString(2);
  }

  static serialize(type) {
    if (isNaN(type) && ArgumentTypes.FLAGS[type.toUpperCase()]) {
      type = ArgumentTypes.FLAGS[type.toUpperCase()];
    }
    return type;
  }

  add(type) {
    type = ArgumentTypes.serialize(type);
    if (!this.has(type)) {
      this.bitfield += type;
    }
    return this;
  }

  remove(type) {
    type = ArgumentTypes.serialize(type);
    if (this.has(type)) {
      this.bitfield -= type;
    }
    return this;
  }

  has(type) {
    type = ArgumentTypes.serialize(type);
    type = Number(type >>> 0).toString(2);
    let has = true;
    let ArgumentTypes = this.toBits();
    if (ArgumentTypes.substring(type.length - 1, type.length) != 1) {
      has = false;
    }
    return has;
  }

  static get ANY() {
    let total = 0;
    for (var i in ArgumentTypes.FLAGS) {
      total += ArgumentTypes.FLAGS[i];
    }
    return total;
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
    this.type = Argument.Types.ANY;
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

}

Command.Argument = Argument;

exports.ArgumentTypes = ArgumentTypes;
exports.Argument = Argument;
exports.Command = Command;
exports.login = token => client.login(token);

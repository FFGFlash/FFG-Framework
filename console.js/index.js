"use strict";
const OS = require("os");

class Message {
  constructor(console = Console, message = "") {
    this.console = console;
    this.message = message;
  }

  write() {
    let message = Array.from(arguments);
    message.unshift(this.message);
    this.message = message.join(" ").replace(`${OS.EOL} `, OS.EOL);
    return this;
  }

  nl() {
    this.message += OS.EOL;
    return this;
  }

  log() {
    this.console.log(this.message);
  }

  error() {
    this.console.error(this.message);
  }

  warn() {
    this.console.warn(this.message);
  }
}

class Console {
  constructor() {
    this.logs = [];
  }

  write() {
    let message = Array.from(arguments).join(" ");
    return new Message(this, message);
  }

  log() {
    let message = Array.from(arguments).join(" ");
    this.logs.push({type: Console.LOG, content: message});
    return console.log(message);
  }

  error() {
    let message = Array.from(arguments).join(" ");
    this.logs.push({type: Console.ERROR, content: message});
    return console.error(message);
  }

  warn() {
    let message = Array.from(arguments).join(" ");
    this.logs.push({type: Console.WARN, content: message});
    return console.warn(message);
  }

  static get LOG() {
    return "log";
  }

  static get ERROR() {
    return "error";
  }

  static get WARN() {
    return "warn";
  }

  static write() {
    let message = Array.from(arguments).join(" ");
    return new Message(Console, message);
  }

  static log() {
    let message = Array.from(arguments).join(" ");
    Console.logs.push({type: Console.LOG, content: message});
    return console.log(message);
  }

  static error() {
    let message = Array.from(arguments).join(" ");
    Console.logs.push({type: Console.ERROR, content: message});
    return console.error(message);
  }

  static warn() {
    let message = Array.from(arguments).join(" ");
    Console.logs.push({type: Console.WARN, content: message});
    return console.warn(message);
  }
}

Console.logs = [];

module.exports = Console;

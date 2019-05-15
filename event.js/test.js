const EventHandler = require("./index.js");

let eventHandler = new EventHandler();

eventHandler.on("call1", data => {
	console.log(data);
}).on("call2", data => {
	console.log(data);
});

eventHandler.emit("call1");
eventHandler.emit("call1", {
	foo: "bar",
	bar: "foo",
	foobar: "barfoo"
});
eventHandler.emit("call2", "foobar");

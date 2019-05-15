class EventHandler {
	constructor() {
		Object.defineProperty(this, "events", {value: {}, writable: false});
	}

	on(name, callback) {
		if (!this.events[name]) this.events[name] = [];
		this.events[name].push(async function() {
			callback.apply(this, arguments);
		});
		return this;
	}

	emit(name) {
		let args = Array.from(arguments);
		args.shift();
		if (!this.events[name]) return;
		for (let i in this.events[name]) {
			this.events[name][i].apply(this, args);
		}
	}
}

module.exports = EventHandler;

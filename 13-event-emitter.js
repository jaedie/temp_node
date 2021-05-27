const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, age) => {
  console.log(`data received! name: ${name} age : ${age}`);
});
customEmitter.on("response", () => {
  console.log(`2nd function`);
});

customEmitter.emit("response", "john", 34);

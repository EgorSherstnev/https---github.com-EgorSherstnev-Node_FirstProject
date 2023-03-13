const EventEmitter = require('events');

const emitter = new EventEmitter();

const log = (msg) => {
   console.log(msg)
};

module.exports = log;
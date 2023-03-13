const EventEmitter = require('events');
const log = require('./log')

const emitter = new EventEmitter();

emitter.on('some_event', (args) => {
   const { id, text } = args;
   console.log(id, text);
});


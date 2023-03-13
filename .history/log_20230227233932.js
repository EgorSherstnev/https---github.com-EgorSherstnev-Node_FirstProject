const EventEmitter = require('events');

const emitter = new EventEmitter();

const log = (msg) => {
   console.log(msg);
   emitter.emit('some_event', { id:1, text: 'Event test text!' });
};

module.exports = log;
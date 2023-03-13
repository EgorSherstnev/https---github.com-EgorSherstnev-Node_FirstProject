const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('some_event', (text) => {
   console.log(text);
});

emitter.emit('some_event', 'Event test text!')
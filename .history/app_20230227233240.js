const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('some_event', (args) => {
   console.log(text);
});

emitter.emit('some_event', { id:1, text: 'Event test text!' });
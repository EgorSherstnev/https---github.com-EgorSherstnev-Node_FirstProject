const Logged = require('./log');
const logger = new Logged();

emitter.on('some_event', (args) => {
   const { id, text } = args;
   console.log(id, text);
});

log('User Logged!');
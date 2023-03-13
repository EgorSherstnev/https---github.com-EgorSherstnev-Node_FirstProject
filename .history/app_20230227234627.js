const Logged = require('./log')

emitter.on('some_event', (args) => {
   const { id, text } = args;
   console.log(id, text);
});

log('User Logged!');
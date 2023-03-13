const Logged = require('./log');
const logger = new Logged();

logger.on('some_event', (args) => {
   const { id, text } = args;
   console.log(id, text);
});

logger('User Logged!');
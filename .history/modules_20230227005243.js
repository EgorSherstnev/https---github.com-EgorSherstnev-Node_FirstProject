const os = require('os');
const {userName: user, sayHi} = require('./test');

const name = 'Tommy'

console.log(sayHi(name));

module.exports = name;
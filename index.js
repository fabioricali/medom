const isMocha = require('mocha-is-running');
module.exports = isMocha()
    ? require('./src/index')
    : require('./dist/medom');
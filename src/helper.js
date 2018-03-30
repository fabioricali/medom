const {SIGN} = require('./constants');

function isSigned(n) {
    return n.hasOwnProperty(SIGN);
}

module.exports = {
    isSigned
};
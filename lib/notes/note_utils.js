const { BASE_NOTES, ACCIDENTALS, ENHARMONIC_KEY_MAP } = require('./notes');

function isEnharmonicKey(key) {
    return ENHARMONIC_KEY_MAP[key % 12].length > 1;
}

module.exports = { isEnharmonicKey }
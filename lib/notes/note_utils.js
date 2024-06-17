const { BASE_NOTES, ACCIDENTALS } = require('./notes');
const { ENHARMONIC_KEY_MAP } = require('./enharmonics');

function isEnharmonicKey(key) {
    return ENHARMONIC_KEY_MAP[key % 12].length > 1;
}

module.exports = { isEnharmonicKey }
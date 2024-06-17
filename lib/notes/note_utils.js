const { BASE_NOTES, ACCIDENTALS, KEY_TO_NOTES_MAP, NOTE_TO_KEY_MAP } = require('./notes');

function isEnharmonicKey(key) {
    return KEY_TO_NOTES_MAP[key % 12].length > 1;
}

function getKeyFromNote(note) {
    return NOTE_TO_KEY_MAP[note];
}

module.exports = { isEnharmonicKey, getKeyFromNote }
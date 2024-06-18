const { BASE_NOTES, ACCIDENTALS, KEY_TO_NOTES_MAP, NOTE_TO_KEY_MAP } = require('./notes');
const { getScaleKeys } = require('../scales/scale_utils');
const { SCALE_TYPES } = require('../scales/scales');

function isEnharmonicKey(key) {
    return KEY_TO_NOTES_MAP[key % 12].length > 1;
}

function getKeyFromNote(note) {
    return NOTE_TO_KEY_MAP[note];
}

// function getNoteFromKey(key, scale_root_note, scale_type) {
//     if (!isEnharmonicKey(key % 12)) {
//         return KEY_TO_NOTES_MAP[key % 12][0];
//     }



//     const scale_root_key = getKeyFromNote(scale_root_note);
//     const possible_scale_root_notes = KEY_TO_NOTES_MAP[scale_root_key % 12];
//     const scale_root_note_index = possible_scale_root_notes.indexOf(scale_root_note);
//     const enharmonics = SCALE_TYPES[scale_type].enharmonics[scale_root_note_index];



//     const scale_keys = getScaleKeys(scale_root_key, scale_type);
//     const scale_notes = scale_keys
//         .map((scale_key, index) => {
//             const possible_notes = KEY_TO_NOTES_MAP[scale_key % 12];
//         })


// }

module.exports = { isEnharmonicKey, getKeyFromNote }
const { BASE_NOTES, ACCIDENTALS, KEY_TO_NOTES_MAP, NOTE_TO_KEY_MAP } = require("./notes");
const { getScaleKeys } = require("../scales/scale_utils");
const { SCALE_TYPES, SUPPORTED_KEYS } = require("../scales/scales");

function isEnharmonicKey(key) {
    return KEY_TO_NOTES_MAP[key % 12].length > 1;
}

function getKeyFromNote(note) {
    return NOTE_TO_KEY_MAP[note];
}

function getNotesForScale(scale_root_note, scale_type) {

    if (!SUPPORTED_KEYS.includes(scale_root_note)) {
        throw new Error(`${scale_root_note} ${scale_type} is not a supported key.`);
    }

    const scale_root_key = getKeyFromNote(scale_root_note);
    const scale_root_key_enharmonic_notes = KEY_TO_NOTES_MAP[scale_root_key % 12];
    const scale_root_note_index = scale_root_key_enharmonic_notes.indexOf(scale_root_note);
    const enharmonics = SCALE_TYPES[scale_type].enharmonics[scale_root_key][scale_root_note_index];

    const scale_keys = getScaleKeys(scale_root_key, scale_type);

    const scale_notes = scale_keys
        .map((scale_key) => KEY_TO_NOTES_MAP[scale_key % 12])
        .map((possible_scale_notes, index) => {
            const enharmonic_index = enharmonics[index];
            return possible_scale_notes[enharmonic_index];
        });

    return scale_notes;
}

function getNoteFromKey(key, scale_root_note, scale_type) {
    if (!isEnharmonicKey(key % 12)) {
        return KEY_TO_NOTES_MAP[key % 12][0];
    }

    const scale_notes = getNotesForScale(scale_root_note, scale_type);
    const possible_key_notes = KEY_TO_NOTES_MAP[key % 12];

    if(scale_notes.includes(possible_key_notes[0])) {
        return possible_key_notes[0];
    } else {
        return possible_key_notes[1];
    }

}

module.exports = { isEnharmonicKey, getKeyFromNote, getNoteFromKey, getNotesForScale };

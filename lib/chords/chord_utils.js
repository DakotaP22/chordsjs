const { getNoteFromKey, getKeyFromNote, getNotesForScale } = require('../notes/note_utils');
const { CHORD_TYPES } = require('./chords');
const { SCALE_TYPES } = require('../scales/scales');
const { getScaleKeys } = require('../scales/scale_utils');
const { getChordTypeFromRomanNumeral } = require('./chord_type_utils');


function getChordKeysFromRootKey(root_key, chord_type) {
    return CHORD_TYPES[chord_type.toLowerCase()]
        .map(offset => root_key + offset)
}

function getChordKeysFromRootNote(chord_root_note, chord_type) {
    const root_key = getKeyFromNote(chord_root_note);
    return getChordKeysFromRootKey(root_key, chord_type);
}

function getChordNotesFromRootKey(root_key, chord_type, scale_root_note, scale_type) {

    const roman_numerals = SCALE_TYPES[scale_type].roman_numerals;
    const scale_notes = getScaleKeys(root_key, scale_type);
    const note_index = scale_notes.indexOf(root_key);

    if (note_index === -1) {
        throw new Error(`Chord not found in ${scale_root_note} ${scale_type} scale at root key ${root_key}`);
    }

    const roman_numeral = roman_numerals[note_index];
    if (chord_type !== getChordTypeFromRomanNumeral(roman_numeral)) {
        throw new Error(`${chord_type} Chord not found in scale at root key ${root_key}`);
    }

    const chord_keys = getChordKeysFromRootKey(root_key, chord_type);
    return chord_keys.map(key => getNoteFromKey(key, scale_root_note, scale_type));
}

function getChordNotesFromRootNote(root_note, chord_type, scale_root_note, scale_type) {
    const root_key = getKeyFromNote(root_note);
    return getChordNotesFromRootKey(root_key, chord_type, scale_root_note, scale_type);
}   



module.exports = { getChordKeysFromRootKey, getChordKeysFromRootNote, getChordNotesFromRootKey, getChordNotesFromRootNote }
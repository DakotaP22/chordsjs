import { getKeyFromNote, getNoteFromKey } from "../notes/notes";

/* CONSTANTS */
export const CHORD_TYPE_DATA = {
    // basic chords
    'major': [0, 4, 7],
    'minor': [0, 3, 7],
    'diminished': [0, 3, 6],
    'augmented': [0, 4, 8],
}

export const CHORD_TYPES = () => Object.keys(CHORD_TYPE_DATA);

/* FUNCTIONS */
function isAugmented(roman_numeral) {
    return roman_numeral.includes('+');
}

function isMajor(roman_numeral) {
    return roman_numeral.toUpperCase() === roman_numeral
        && !isAugmented(roman_numeral);
}

function isMinor(roman_numeral) {
    return roman_numeral.toLowerCase() === roman_numeral
        && !isDiminished(roman_numeral);
}

function isDiminished(roman_numeral) {
    return roman_numeral.includes('*');
}

export function getChordTypeFromRomanNumeral(roman_numeral) {
    if (isMajor(roman_numeral)) {
        return 'major';
    } else if (isMinor(roman_numeral)) {
        return 'minor';
    } else if (isAugmented(roman_numeral)) {
        return 'augmented';
    } else if (isDiminished(roman_numeral)) {
        return 'diminished';
    } else {
        throw new Error('Invalid roman numeral');
    }
}

export function getChordKeys(root_note, chord_type, scale_root_note, scale_type) {
    const root_key = getKeyFromNote(root_note);
    const chord_keys = CHORD_TYPE_DATA[chord_type.toLowerCase()].map(offset => root_key + offset);
    return chord_keys;
}

export function getChordNotes(root_note, chord_type, scale_root_note, scale_type) {
    const chord_keys = getChordKeys(root_note, chord_type, scale_root_note, scale_type);
    const chord_notes = chord_keys.map(key => getNoteFromKey(key, scale_root_note, scale_type));
    return chord_notes;
}
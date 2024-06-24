import { getChordKeys, getChordNotes, getChordTypeFromRomanNumeral } from "../chords/chords";
import { KEY_TO_POSSIBLE_NOTES_MAP, NOTE_TO_KEY_MAP, getKeyFromNote } from "../notes/notes";

/* CONSTANTS */
export const SUPPORTED_KEYS = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'Gb', 'C#', 'Db', 'Ab', 'Eb', 'Bb', 'F']

const SCALE_DATA = {
    'major': {
        intervals: [2, 2, 1, 2, 2, 2, 1],
        roman_numerals: ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii*', 'I'],
        enharmonics: [
            [[0, 0, 0, 0, 0, 0, 0, 0], [1, 0, 0, 0, 0, 0, 0, 1]],
        ]
    },
    'natural_minor': {
        intervals: [2, 1, 2, 2, 1, 2, 2],
        roman_numerals: ['i', 'ii*', 'III', 'iv', 'v', 'VI', 'VII', 'i']
    },
    'harmonic_minor': {
        intervals: [2, 1, 2, 2, 1, 3, 1],
        roman_numerals: ['i', 'ii*', 'III+', 'iv', 'V', 'VI', 'vii*', 'i']
    },
    'melodic_minor': {
        intervals: [2, 1, 2, 2, 2, 3, 1],
        roman_numerals: ['i', 'ii', 'III+', 'IV', 'V', 'vi*', 'vii*', 'i']
    },
}


/* FUNCTIONS */
export function getAllKeysForScale(root_note, scale_type) {
    // check if a valid scale is being requested
    if (!SUPPORTED_KEYS.includes(root_note)) {
        throw new Error(`${root_note} ${scale_type} is not a supported key.`);
    }

    // get scale interval list
    const root_key = NOTE_TO_KEY_MAP[root_note];
    const scaleIntervals = SCALE_DATA[scale_type].intervals;

    // map scaleIntervals to a new array where each element is the sum of the previous elements
    const scaleKeys = scaleIntervals.reduce((acc, interval) => {
        const lastKey = acc[acc.length - 1];
        acc.push(lastKey + interval);
        return acc;
    }, [root_key]);

    return scaleKeys;
}

export function getAllNotesForScale(root_note, scale_type) {
    // check if a valid scale is being requested
    if (!SUPPORTED_KEYS.includes(root_note)) {
        throw new Error(`${root_note} ${scale_type} is not a supported key.`);
    }

    // get list of indexes to resolve enharmonics from KEY_TO_POSSIBLE_NOTES_MAP for specified scale
    const scale_root_key = getKeyFromNote(root_note);
    const scale_root_key_enharmonic_notes = KEY_TO_POSSIBLE_NOTES_MAP[scale_root_key % 12];
    const scale_root_note_index = scale_root_key_enharmonic_notes.indexOf(root_note);
    const enharmonic_indecies = SCALE_DATA[scale_type].enharmonics[scale_root_key][scale_root_note_index];

    // get all keys for specified scale
    const scale_keys = getAllKeysForScale(root_note, scale_type);

    // convert scale_keys to scale_notes
    const scale_notes = scale_keys
        .map((scale_key) => KEY_TO_POSSIBLE_NOTES_MAP[scale_key % 12])  // map each key to list of possible notes (enharmonics)
        .map((possible_scale_notes, index) => {                         // merge each list with the enharmonic indicies list to resolve notes
            const enharmonic_index = enharmonic_indecies[index];
            return possible_scale_notes[enharmonic_index];
        });

    return scale_notes;
}

export function getAllChordsAsKeysForScale(root_note, scale_type) {

    const scale_notes = getAllNotesForScale(root_note, scale_type);
    const roman_numerals = SCALE_DATA[scale_type].roman_numerals;


    const chords_as_keys = scale_notes.map((note, index) => {
        const chord_type = getChordTypeFromRomanNumeral(roman_numerals[index]);
        return getChordKeys(note, chord_type, root_note, scale_type);
    });

    return chords_as_keys;
}

export function getAllChordsAsNotesForScale(root_note, scale_type) {
    const scale_notes = getAllNotesForScale(root_note, scale_type);
    const roman_numerals = SCALE_DATA[scale_type].roman_numerals;


    const chords_as_notes = scale_notes.map((note, index) => {
        const chord_type = getChordTypeFromRomanNumeral(roman_numerals[index]);
        return getChordNotes(note, chord_type, root_note, scale_type);
    });

    return chords_as_notes;
}


// module.exports = { SCALE_DATA, SUPPORTED_KEYS }
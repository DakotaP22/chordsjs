import { getAllKeysForScale, getAllNotesForScale } from "../scales/scales";

/* export CONSTANTS */
export const BASE_NOTES = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
export const ACCIDENTALS = ['b', '#'];

export const NOTE_TO_KEY_MAP = {
    'C': 0,
    'C#': 1,
    'Db': 1,
    'D': 2,
    'D#': 3,
    'Eb': 3,
    'E': 4,
    'Fb': 4,
    'F': 5,
    'E#': 5,
    'F#': 6,
    'Gb': 6,
    'G': 7,
    'G#': 8,
    'Ab': 8,
    'A': 9,
    'A#': 10,
    'Bb': 10,
    'B': 11,
    'Cb': 11,
    'B#': 0,
}

export const KEY_TO_POSSIBLE_NOTES_MAP = {
    0: ['C', 'B#'],
    1: ['C#', 'Db'],
    2: ['D'],
    3: ['D#', 'Eb'],
    4: ['E', 'Fb'],
    5: ['F', 'E#'],
    6: ['F#', 'Gb'],
    7: ['G'],
    8: ['G#', 'Ab'],
    9: ['A'],
    10: ['A#', 'Bb'],
    11: ['B', 'Cb']
}

/* FUNCTIONS */
export function isEnharmonicKey(key) {
    return KEY_TO_POSSIBLE_NOTES_MAP[key % 12].length > 1;
}

export function getKeyFromNote(note) {
    return NOTE_TO_KEY_MAP[note];
}

export function getNoteFromKey(key, scale_root_note, scale_type) {
    // verify key is in scale
    const scale_keys = getAllKeysForScale(scale_root_note, scale_type);
    if (!scale_keys.includes(key % 12)) {
        throw new Error(`${key % 12} is not in ${scale_root_note} ${scale_type} (${scale_keys})`)
    }

    if (!isEnharmonicKey(key % 12)) {
        return KEY_TO_POSSIBLE_NOTES_MAP[key % 12][0];
    }

    const scale_notes = getAllNotesForScale(scale_root_note, scale_type);
    const possible_key_notes = KEY_TO_POSSIBLE_NOTES_MAP[key % 12];

    if (scale_notes.includes(possible_key_notes[0])) {
        return possible_key_notes[0];
    } else {
        return possible_key_notes[1];
    }

}

// module.exports = { BASE_NOTES, ACCIDENTALS, NOTE_TO_KEY_MAP, KEY_TO_POSSIBLE_NOTES_MAP }
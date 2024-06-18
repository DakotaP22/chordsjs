const { SCALE_TYPES } = require('./scales');
const { NOTE_TO_KEY_MAP } = require('../notes/notes');
const { isAugmented, isDiminished, isMajor, isMinor } = require('../chords/chord_type_utils');
const { getChordKeys } = require('../chords/chord_utils');


function getScaleKeys(root_key, scale_type) {
    const scaleIntervals = SCALE_TYPES[scale_type].intervals;
    
    // map scaleIntervals to a new array where each element is the sum of the previous elements
    const scaleKeys = scaleIntervals.reduce((acc, interval) => {
        const lastKey = acc[acc.length - 1];
        acc.push(lastKey + interval);
        return acc;
    }, [root_key]);

    return scaleKeys;
}


function getScaleChordKeysFromRootKey(root_key, scale_type) {
    keys = getScaleKeys(root_key, scale_type);
    roman_numerals = SCALE_TYPES[scale_type].roman_numerals;

    return keys.map((key, i) => {
        roman_numeral = roman_numerals[i];
        if (isMajor(roman_numeral)) {
            return getChordKeys(key, 'major');
        } else if (isMinor(roman_numeral)) {
            return getChordKeys(key, 'minor');
        } else if (isAugmented(roman_numeral)) {
            return getChordKeys(key, 'augmented');
        } else if (isDiminished(roman_numeral)) {
            return getChordKeys(key, 'diminished');
        }
    })
}

function getScaleChordKeys(root_note, scale_type) {
    const key = NOTE_TO_KEY_MAP[root_note];
    return getScaleChordKeysFromRootKey(key, scale_type);
}

module.exports = { getScaleKeys, getScaleChordKeysFromRootKey, getScaleChordKeys }
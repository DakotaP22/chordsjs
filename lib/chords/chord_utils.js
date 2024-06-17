const { NOTES } = require('../notes/notes');
const { getNote } = require('../notes/note_utils');
const { CHORD_TYPES } = require('./chords');


function getChordKeys(root_key, type) {
    return CHORD_TYPES[type.toLowerCase()]
        .map(offset => root_key + offset)
}

function isAugmented(roman_numeral) {
    return roman_numeral.includes('+');
}

function isDeminished(roman_numeral) {
    return roman_numeral.includes('*');
}

function isMajor(roman_numeral) {
    return roman_numeral.toUpperCase() === roman_numeral
        && !isAugmented(roman_numeral);
}

function isMinor(roman_numeral) {
    return roman_numeral.toLowerCase() === roman_numeral
        && !isDeminished(roman_numeral);
}


module.exports = { getChordKeys, isAugmented, isDeminished, isMajor, isMinor }
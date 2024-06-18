
function getChordTypeFromRomanNumeral(roman_numeral) {
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

function isAugmented(roman_numeral) {
    return roman_numeral.includes('+');
}

function isDiminished(roman_numeral) {
    return roman_numeral.includes('*');
}

function isMajor(roman_numeral) {
    return roman_numeral.toUpperCase() === roman_numeral
        && !isAugmented(roman_numeral);
}

function isMinor(roman_numeral) {
    return roman_numeral.toLowerCase() === roman_numeral
        && !isDiminished(roman_numeral);
}

module.exports = { getChordTypeFromRomanNumeral, isAugmented, isDiminished, isMajor, isMinor }
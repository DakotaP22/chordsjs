const SCALE_TYPES = {
    'major': {
        intervals: [2, 2, 1, 2, 2, 2, 1],
        roman_numerals: ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii*', 'I'] 
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

module.exports = { SCALE_TYPES }
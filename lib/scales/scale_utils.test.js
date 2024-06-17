const { getScaleKeys, getScaleChordKeysFromRootKey, getScaleChordKeys } = require('./scale_utils');

test('getScaleKeys()', () => {
    expect(getScaleKeys(0, 'major')).toEqual([0, 2, 4, 5, 7, 9, 11, 12]);
    expect(getScaleKeys(0, 'natural_minor')).toEqual([0, 2, 3, 5, 7, 8, 10, 12]);
    expect(getScaleKeys(0, 'harmonic_minor')).toEqual([0, 2, 3, 5, 7, 8, 11, 12]);
})

test('getScaleChordKeysFromRootKey()', () => {
    expect(getScaleChordKeysFromRootKey(0, 'major')).toEqual([
        [0, 4, 7],
        [2, 5, 9],
        [4, 7, 11],
        [5, 9, 12],
        [7, 11, 14],
        [9, 12, 16],
        [11, 14, 17],
        [12, 16, 19]
    ]);

})

test('getScaleChordKeys()', () => {
    expect(getScaleChordKeys('C', 'major')).toEqual([
        [0, 4, 7],
        [2, 5, 9],
        [4, 7, 11],
        [5, 9, 12],
        [7, 11, 14],
        [9, 12, 16],
        [11, 14, 17],
        [12, 16, 19]
    ]);

    expect(getScaleChordKeys('C#', 'major')).toEqual(getScaleChordKeysFromRootKey(1, 'major'))
    expect(getScaleChordKeys('C#', 'major')).toEqual(getScaleChordKeys("Db", 'major'))

    console.log(getScaleChordKeys("C", "melodic_minor"))
})
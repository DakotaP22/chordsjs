const { getChordKeysFromRootKey, getChordKeysFromRootNote, getChordNotesFromRootKey, getChordNotesFromRootNote } = require("./chord_utils")

test('getChordKeysFromRootKey', () => { 
    expect(getChordKeysFromRootKey(0, 'major')).toEqual([0, 4, 7])
    expect(getChordKeysFromRootKey(2, 'major')).toEqual([2, 6, 9])
})

test('getChordKeysFromRootNote', () => {
    expect(getChordKeysFromRootNote('C', 'major')).toEqual([0, 4, 7])
    expect(getChordKeysFromRootNote('D', 'major')).toEqual([2, 6, 9])
});

test('getChordNotesFromRootKey', () => {
    expect(getChordNotesFromRootKey(0, 'major', 'C', 'major')).toEqual(['C', 'E', 'G'])
    console.log(getChordNotesFromRootKey(2, 'major', 'C', 'major'))
});
 
test('getChordNotesFromRootNote', () => {
    expect(getChordNotesFromRootNote('C', 'major', 'C', 'major')).toEqual(['C', 'E', 'G'])
    // expect(getChordNotesFromRootNote('D', 'major', 'C', 'major')).toEqual(['C', 'E', 'G'])
});
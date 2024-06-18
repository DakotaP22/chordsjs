const { getChordKeys, getChordNotesFromRootKey, getChordNotesFromRootNote } = require("./chord_utils")

test('getChordKeys', () => { 
    expect(getChordKeys(0, 'major')).toEqual([0, 4, 7])
})

test('getChordNotesFromRootKey', () => {
    expect(getChordNotesFromRootKey(0, 'major', 'C', 'major')).toEqual(['C', 'E', 'G'])
    console.log(getChordNotesFromRootKey(2, 'major', 'C', 'major'))
});
 
test('getChordNotesFromRootNote', () => {
    expect(getChordNotesFromRootNote('C', 'major', 'C', 'major')).toEqual(['C', 'E', 'G'])
    // expect(getChordNotesFromRootNote('D', 'major', 'C', 'major')).toEqual(['C', 'E', 'G'])
});
import { getChordKeys, getChordNotes } from "./chords"

test('getChordNotes', () => {
    expect(getChordNotes('C', 'major', 'C', 'major')).toEqual(['C', 'E', 'G']);
    expect(getChordNotes('D', 'minor', 'C', 'major')).toEqual(['D', 'F', 'A']);
    expect(getChordNotes('E', 'minor', 'C', 'major')).toEqual(['E', 'G', 'B']);
    expect(getChordNotes('F', 'major', 'C', 'major')).toEqual(['F', 'A', 'C']);
    expect(getChordNotes('G', 'major', 'C', 'major')).toEqual(['G', 'B', 'D']);
    expect(getChordNotes('A', 'minor', 'C', 'major')).toEqual(['A', 'C', 'E']);
    expect(getChordNotes('B', 'diminished', 'C', 'major')).toEqual(['B', 'D', 'F']);
});

test('getChordKeys', () => {
    expect(getChordKeys('C', 'major', 'C', 'major')).toEqual([0, 4, 7]);
})
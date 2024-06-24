import { getAllKeysForScale, getAllNotesForScale, getAllChordsAsKeysForScale, getAllChordsAsNotesForScale } from './scales';

test('getAllKeysForScale', () => {
    expect(getAllKeysForScale('C', 'major')).toEqual([0, 2, 4, 5, 7, 9, 11, 12]);
})

test('getAllNotesForScale', () => {
    expect(getAllNotesForScale('C', 'major')).toEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']);
})

test('getAllChordsAsKeysForScale', () => {
    expect(getAllChordsAsKeysForScale('C', 'major')).toEqual([
        { chord: 'C major', keys: [0, 4, 7] },
        { chord: 'D minor', keys: [2, 5, 9] },
        { chord: 'E minor', keys: [4, 7, 11] },
        { chord: 'F major', keys: [5, 9, 12] },
        { chord: 'G major', keys: [7, 11, 14] },
        { chord: 'A minor', keys: [9, 12, 16] },
        { chord: 'B diminished', keys: [11, 14, 17] },
        { chord: 'C major', keys: [0, 4, 7] }
    ]);
});

test('getAllChordsAsNotesForScale', () => {
    expect(getAllChordsAsNotesForScale('C', 'major')).toEqual([
        { chord: 'C major', notes: ['C', 'E', 'G'] },
        { chord: 'D minor', notes: ['D', 'F', 'A'] },
        { chord: 'E minor', notes: ['E', 'G', 'B'] },
        { chord: 'F major', notes: ['F', 'A', 'C'] },
        { chord: 'G major', notes: ['G', 'B', 'D'] },
        { chord: 'A minor', notes: ['A', 'C', 'E'] },
        { chord: 'B diminished', notes: ['B', 'D', 'F'] },
        { chord: 'C major', notes: ['C', 'E', 'G'] }
    ]);
});
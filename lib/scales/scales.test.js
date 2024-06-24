import { getAllKeysForScale, getAllNotesForScale, getAllChordsAsKeysForScale, getAllChordsAsNotesForScale } from './scales';

test('getAllKeysForScale', () => {
    expect(getAllKeysForScale('C', 'major')).toEqual([0, 2, 4, 5, 7, 9, 11, 12]);
})

test('getAllNotesForScale', () => {
    expect(getAllNotesForScale('C', 'major')).toEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']);
})

test('getAllChordsAsKeysForScale', () => {
    expect(getAllChordsAsKeysForScale('C', 'major')).toEqual([
        [0, 4, 7],
        [2, 5, 9],
        [4, 7, 11],
        [5, 9, 12],
        [7, 11, 14],
        [9, 12, 16],
        [11, 14, 17],
        [0, 4, 7]
    ]);
});

test('getAllChordsAsNotesForScale', () => {
    expect(getAllChordsAsNotesForScale('C', 'major')).toEqual([
        ['C', 'E', 'G'],
        ['D', 'F', 'A'],
        ['E', 'G', 'B'],
        ['F', 'A', 'C'],
        ['G', 'B', 'D'],
        ['A', 'C', 'E'],
        ['B', 'D', 'F'],
        ['C', 'E', 'G']
    ]);
});
import { getAllKeysForScale, getAllNotesForScale } from './scales';

test('getAllKeysForScale', () => {
    expect(getAllKeysForScale('C', 'major')).toEqual([0, 2, 4, 5, 7, 9, 11, 12]);
})

test('getAllNotesForScale', () => {
    expect(getAllNotesForScale('C', 'major')).toEqual(['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C']);
})
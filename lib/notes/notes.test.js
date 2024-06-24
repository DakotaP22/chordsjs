import { getNoteFromKey } from "./notes";

test('getNoteFromKey()', () => {
    expect(getNoteFromKey(0, 'C', 'major')).toBe('C');
    expect(getNoteFromKey(2, 'C', 'major')).toBe('D');
    expect(getNoteFromKey(4, 'C', 'major')).toBe('E');
    expect(getNoteFromKey(5, 'C', 'major')).toBe('F');
    expect(getNoteFromKey(7, 'C', 'major')).toBe('G');
    expect(getNoteFromKey(9, 'C', 'major')).toBe('A');
    expect(getNoteFromKey(11, 'C', 'major')).toBe('B');
    expect(getNoteFromKey(12, 'C', 'major')).toBe('C');
})
const { isEnharmonicKey } = require("./note_utils");

test('isEnharmonicKey', () => {
    expect(isEnharmonicKey(0)).toBe(true);
    expect(isEnharmonicKey(1)).toBe(true);
    expect(isEnharmonicKey(2)).toBe(false);
    expect(isEnharmonicKey(3)).toBe(true);
    expect(isEnharmonicKey(4)).toBe(true);
    expect(isEnharmonicKey(5)).toBe(true);
    expect(isEnharmonicKey(6)).toBe(true);
    expect(isEnharmonicKey(7)).toBe(false);
    expect(isEnharmonicKey(8)).toBe(true);
    expect(isEnharmonicKey(9)).toBe(false);
    expect(isEnharmonicKey(10)).toBe(true);
    expect(isEnharmonicKey(11)).toBe(true);
    expect(isEnharmonicKey(12)).toBe(true);
    expect(isEnharmonicKey(13)).toBe(true);
    expect(isEnharmonicKey(14)).toBe(false);
 });
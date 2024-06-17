const { isEnharmonicKey, getKeyFromNote } = require("./note_utils");

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
 
test('getKeyFromNote', () => {
    expect(getKeyFromNote('C')).toBe(0);
    expect(getKeyFromNote('C#')).toBe(1);
    expect(getKeyFromNote('Db')).toBe(1);
    expect(getKeyFromNote('D')).toBe(2);
    expect(getKeyFromNote('D#')).toBe(3);
    expect(getKeyFromNote('Eb')).toBe(3);
    expect(getKeyFromNote('E')).toBe(4);
    expect(getKeyFromNote('Fb')).toBe(4);
    expect(getKeyFromNote('F')).toBe(5);
    expect(getKeyFromNote('E#')).toBe(5);
    expect(getKeyFromNote('F#')).toBe(6);
    expect(getKeyFromNote('Gb')).toBe(6);
    expect(getKeyFromNote('G')).toBe(7);
    expect(getKeyFromNote('G#')).toBe(8);
    expect(getKeyFromNote('Ab')).toBe(8);
    expect(getKeyFromNote('A')).toBe(9);
    expect(getKeyFromNote('A#')).toBe(10);
    expect(getKeyFromNote('Bb')).toBe(10);
    expect(getKeyFromNote('B')).toBe(11);
    expect(getKeyFromNote('Cb')).toBe(11);
    expect(getKeyFromNote('B#')).toBe(0);

});
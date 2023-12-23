import caesarCipher from '../modules/caesar-cipher';

test('apple pen', () => {
    expect(caesarCipher('apple pen', 2)).toBe('CRRNG RGP');
});

test('happy', () => {
    expect(caesarCipher('happy', 0)).toBe('HAPPY');
});

test('a wraps to z', () => {
    expect(caesarCipher('zebra', 3)).toBe('CHEUD');
});

test('punctuation not changing', () => {
    expect(caesarCipher('a!@#$', 3)).toBe('D!@#$');
});

test('word not provided', () => {
    expect(caesarCipher(2)).toBeNull();
});

test('key not provided', () => {
    expect(caesarCipher('apple')).toBeNull();
});

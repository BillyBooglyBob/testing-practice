import reverseString from '../modules/reverse-string';

test('reverse odd number of letters', () => {
    expect(reverseString('block')).toBe('kcolb');
});

test('reverse even number of letters', () => {
    expect(reverseString('chonky')).toBe('yknohc');
});

test('reverse single letter', () => {
    expect(reverseString('a')).toBe('a');
});

test('no letters', () => {
    expect(reverseString()).toBeNull();
});

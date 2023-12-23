import calculator from '../modules/calculator';

test('addition', () => {
    expect(calculator(1, 2, '+')).toBe(3);
});

test('subtraction', () => {
    expect(calculator(1, 2, '-')).toBe(-1);
});

test('multiplication', () => {
    expect(calculator(2, 5, '*')).toBe(10);
});

test('divide', () => {
    expect(calculator(10, 5, '/')).toBe(2);
});

test('nothing provided', () => {
    expect(calculator()).toBeNull();
});

test('number 1 missing', () => {
    expect(calculator(1, 2)).toBeNull();
});

test('number 2 missing', () => {
    expect(calculator(1, 2)).toBeNull();
});

test('operator missing', () => {
    expect(calculator(1, 2)).toBeNull();
});

test('wrong operator', () => {
    expect(calculator(1, 2, '>')).toBe(0);
});

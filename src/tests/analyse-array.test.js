import analyseArray from '../modules/analyse-array';

test('test all 1', () => {
    const object = {
        average: 4,
        min: 1,
        max: 8,
        length: 6
    };
    expect(analyseArray([1, 8, 3, 4, 2, 6])).toEqual(object);
});

test('non number provided', () => {
    expect(analyseArray(['b', 2, 'A'])).toBe(-1);
});

test('empty array', () => {
    expect(analyseArray([])).toBeNull();
});

test('no input', () => {
    expect(analyseArray()).toBeNull();
});

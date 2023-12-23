// const capitalise = require('../modules/capitalise');

import capitalise from '../modules/capitalise';

test('capitalise 1 letter', () => {
    expect(capitalise('a')).toBe('A');
});

test('capitalise 1 word', () => {
    expect(capitalise('happy')).toBe('Happy');
});

test('capitalise a sentence', () => {
    expect(capitalise('yummy food')).toBe('Yummy food');
});

test('return capitalised word as it is', () => {
    expect(capitalise('Happy')).toBe('Happy');
});

test('return nothing when no arguments provided', () => {
    expect(capitalise()).toBeNull();
});

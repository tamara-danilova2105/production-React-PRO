import { classNames } from "./classNames";

describe('className', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass')
    });

    test('with additional class', () => {
        const expected = 'someClass class1 class2'
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
    });
});
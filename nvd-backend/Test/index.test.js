

const { add } = require('../index');

test('toBe', () => {
    expect(add(1, 2)).toBe(3);
});
const { add } = require("./utils");

describe('testing the jest unit test 1', () => {
    it('jest unit test ', () => {
       expect(add(5,6)).toBe(11)
    });
});

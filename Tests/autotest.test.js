const autotest = require("../autotest");

test("Should return a positive number", () => {
  const result = autotest.absolute(-1);
  expect(result).toBe(1);
});

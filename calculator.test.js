import calculator from "./calculator";

test("2+2 is 4", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test("12-2 is 10", () => {
  expect(calculator.substract(12, 2)).toBe(10);
});

test("16/8 is 2", () => {
  expect(calculator.divide(16, 8)).toBe(2);
});

test("50*2 is 100", () => {
  expect(calculator.multiply(50, 2)).toBe(100);
});

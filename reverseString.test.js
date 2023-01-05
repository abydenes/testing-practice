import reverseString from "./reverseString";

test("d reversed is d", () => {
  expect(reverseString("d")).toBe("d");
});

test("kayak reversed is kayak", () => {
  expect(reverseString("kayak")).toBe("kayak");
});

test("toy reversed is yot", () => {
  expect(reverseString("toy")).toBe("yot");
});

test("package reversed is egakcap", () => {
  expect(reverseString("package")).toBe("egakcap");
});

import capitalize from "./capitalize.js";

test("an empty string capitalized is an empty string", () => {
  expect(capitalize("")).toBe("");
});

test("d capitalized is D", () => {
  expect(capitalize("d")).toBe("D");
});

test("school capitalized is School", () => {
  expect(capitalize("school")).toBe("School");
});

test("apple capitalized is Apple", () => {
  expect(capitalize("apple")).toBe("Apple");
});

test("decentralization capitalized is Decentralization", () => {
  expect(capitalize("decentralization")).toBe("Decentralization");
});

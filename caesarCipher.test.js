import caesarCipher from "./caesarCipher";

test("a to be b", () => {
  expect(caesarCipher("a")).toBe("b");
});

test("z to be a", () => {
  expect(caesarCipher("z")).toBe("a");
});

test("hello to be ifmmp", () => {
  expect(caesarCipher("hello")).toBe("ifmmp");
});

test("keep THE CaSe to be lffq UIF DbTf", () => {
  expect(caesarCipher("keep THE CaSe")).toBe("lffq UIF DbTf");
});

test("punctuation", () => {
  expect(caesarCipher("Hello, I am Mark...")).toBe("Ifmmp, J bn Nbsl...");
});

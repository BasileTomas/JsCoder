const { expect } = require("@jest/globals")
var validation = require("./main")


// Chech if name has a number
test("Check if name has a number", () => {
    expect(validation.hasNumber("Tomas06")).toBe(true)
});

test("Check if name has a number", () => {
    expect(validation.hasNumber("Tomas")).toBe(false)
});


// Chech if name has a number
test("Check if is a valid age", () => {
    expect(validation.isValidAge("")).toBe(false)
});

test("Check if is a valid age", () => {
    expect(validation.isValidAge("String")).toBe(false)
});


// Chech if name has a number
test("Check if name has a number", () => {
    expect(validation.isLegalAge(5)).toBe(false)
});

test("Check if name has a number", () => {
    expect(validation.isLegalAge(18)).toBe(true)
});


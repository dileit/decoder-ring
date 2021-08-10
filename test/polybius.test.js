// Write your tests here!

const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
	it("when encoding, should translate 'i' and 'j' to 42", () => {
		const actual = polybius("thinkfulj");
		const expected = "443242335212541342";
		expect(actual).to.equal(expected);
	});

	it("when decoding, should translate 42 to 'i' and 'j' ", () => {
		const actual = polybius("4432423352125413", false);
		const expected = "th(i/j)nkful";
		expect(actual).to.equal(expected);
	});

	it("should ignore capital letters", () => {
		const actual = polybius("HELLO WorLd");
		const expected = "3251131343 2543241341";
		expect(actual).to.equal(expected);
		const test2 = polybius("3251131343 2543241341", false);
		const expected2 = "hello world";
		expect(test2).to.equal(expected2);
	});

	it("maintains spaces in the message before and after encoding/decoding", () => {
		const actual = polybius("Hello world");
		const expected = "3251131343 2543241341";
		expect(actual).to.equal(expected);
		const test2 = polybius("3251131343 2543241341", false);
		const expected2 = "hello world";
		expect(test2).to.equal(expected2);
	});
});

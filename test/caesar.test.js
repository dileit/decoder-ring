// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
	// test shift value - return false
	it("should return false if shift value is equal to 0, less than -25, greater than 25, or not present", () => {
		const actual = caesar("Thinkful", 37);
		expect(actual).to.be.false;
	});
	// test capital letters ignored
	it("should ignore capital letters", () => {
		const message = "This is a secret message!";
		const actual = caesar(message, 8);
		expect(actual).to.equal("bpqa qa i amkzmb umaaiom!");
	});
	// test encoding for shifts past end alphabet
	it("When encoding, should handle shifts past the end of the alphabet", () => {
		const actual = caesar("This is a secret message", 8);
		expect(actual).to.equal("bpqa qa i amkzmb umaaiom");
	});
	// test maintain spaces-symbols
	it("should maintain spaces and nonalphabetic symbols in the message, before AND after encoding or decoding", () => {
		const actual = caesar("This is a secret! message!", 8);
		expect(actual).to.equal("bpqa qa i amkzmb! umaaiom!");
	});
});

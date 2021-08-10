// Write your tests here!
const { substitution } = require("../src/substitution");
const { expect } = require("chai");

describe("substitution", () => {
	it("returns false if given alphabet isn't exactly 26 characters long", () => {
		const actual = substitution("thinkful", "short");
		expect(actual).to.be.false;
	});

	it("correctly translates given phrase, based on alphabet given", () => {
		const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
		const expected = "y&ii$r&";
		expect(actual).to.equal(expected);
	});

	it("returns false if there are any duplicate characters in given alphabet", () => {
		const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
		expect(actual).to.be.false;
	});

	it("maintains spaces in the message, before and after encoding or decoding", () => {
		const actual = substitution(
			"you are an excellent spy",
			"xoyqmcgrukswaflnthdjpzibev"
		);
		const expected = "elp xhm xf mbymwwmfj dne";
		expect(actual).to.equal(expected);
	});

	it("ignores capital letters", () => {
		const actual = substitution(
			"JRUFscpw",
			"xoyqmcgrukswaflnthdjpzibev",
			false
		);
		const expected = "thinkful";
		expect(actual).to.equal(expected);
	});
});

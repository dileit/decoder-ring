const substitutionModule = (function () {
	// variables
	const normalAlpha = "abcdefghijklmnopqrstuvwxyz";

	// helper function for duplicate characters
	const uniqueChar = function (alphabet) {
		for (let i = 0; i < alphabet.length; i++) {
			for (let j = i + 1; j < alphabet.length; j++) {
				if (alphabet[i] == alphabet[j]) return true;
			}
		}
	};

	function substitution(input, alphabet, encode = true) {
		// guard clause
		if (!alphabet || alphabet.length != 26 || uniqueChar(alphabet))
			return false;

		// ignore capital letters
		const messageLower = input.toLowerCase();

		let resultMsg = "";

		const alphabetArr = alphabet.split("");
		const normalAlphaArr = normalAlpha.split("");

		// encode a message
		if (encode) {
			for (let letter of messageLower) {
				if (letter === " ") {
					resultMsg += letter;
					continue;
				} else {
					let cur = normalAlpha.indexOf(letter);

					const newLetter = alphabetArr.find((item, i) => i === cur);

					resultMsg += newLetter;
				}
			}
		} else {
			// decoding a message
			for (let letter of messageLower) {
				if (letter === " ") {
					resultMsg += letter;
					continue;
				} else {
					let cur = alphabet.indexOf(letter);

					const newLetter = normalAlphaArr.find((item, i) => i === cur);

					resultMsg += newLetter;
				}
			}
		}
		return resultMsg;
	}

	return {
		substitution,
	};
})();

module.exports = { substitution: substitutionModule.substitution };

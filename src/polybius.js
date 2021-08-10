const polybiusModule = (function () {
	// global square variables

	const alphabet = {
		a: "11",
		b: "21",
		c: "31",
		d: "41",
		e: "51",
		f: "12",
		g: "22",
		h: "32",
		i: "42",
		j: "42",
		k: "52",
		l: "13",
		m: "23",
		n: "33",
		o: "43",
		p: "53",
		q: "14",
		r: "24",
		s: "34",
		t: "44",
		u: "54",
		v: "15",
		w: "25",
		x: "35",
		y: "45",
		z: "55",
		[" "]: " ",
	};

	const numPairs = {
		11: "a",
		21: "b",
		31: "c",
		41: "d",
		51: "e",
		12: "f",
		22: "g",
		32: "h",
		42: "(i/j)",
		52: "k",
		13: "l",
		23: "m",
		33: "n",
		43: "o",
		53: "p",
		14: "q",
		24: "r",
		34: "s",
		44: "t",
		54: "u",
		15: "v",
		25: "w",
		35: "x",
		45: "y",
		55: "z",
	};

	function polybius(input, encode = true) {
		// ignore capital letters
		const message = input.toLowerCase();
		const messageSplit = message.split("");
		let resultMsg = "";
		// If decoding THEN this
		if (!encode) {
			const messageNoWhitespace = message.replace(/\s/g, "");
			// test if numbers given are uneven
			if (messageNoWhitespace.length % 2 != 0) return false;

			// split the words at spaces
			let messageWord = message.split(" ");

			for (let numbers in messageWord) {
				let word = messageWord[numbers];

				// is this word the last?
				const lastWord = messageWord[messageWord.length - 1];
				// variable to add space back into our result message
				const addSpace = word != lastWord ? true : false;
				// while loop to go through each pair of numbers
				while (word.length > 0) {
					let wordPair = word.substr(0, 2);
					// then loop over our numPairs object
					for (let letters in numPairs) {
						let letter = numPairs[letters];
						if (letters == wordPair) resultMsg += letter;
						// add the corresponding letter to our resultMsg
					}
					word = word.slice(2);
				}
				// if current word is not LAST word then true and we add a space back in to our resultMsg
				if (addSpace) resultMsg += " ";
			}
		} else {
			messageSplit.forEach((letter) => {
				// take each character and output a pair of numbers for each character
				for (let key in alphabet) {
					if (key === letter) resultMsg += alphabet[key];
				}
			});
		}

		return resultMsg;
	}

	return {
		polybius,
	};
})();

module.exports = { polybius: polybiusModule.polybius };

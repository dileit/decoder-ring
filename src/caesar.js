const caesarModule = (function () {
	// variables
	const alphabet = "abcdefghijklmnopqrstuvwxyz";

	function caesar(input, shift, encode = true) {
		// guard clause - shift
		if (!shift || shift === 0 || shift < -25 || shift > 25) return false;

		let result = "";

		// ignore capitals -
		const messageLower = input.toLowerCase();
		const message = messageLower.split("");

		// if decoding, we need shift to go backwards -negative
		if (!encode) {
			shift *= -1;
		}
		// Otherwise default behavior is to encode

		message.forEach((letter) => {
			// If (a-z) find and shift, otherwise ignore ( , !)

			if (alphabet.includes(letter)) {
				// shift according to the number shift provided and return that letter IN a new string
				const letterIndex = alphabet.indexOf(letter);

				let newLetter = letterIndex + shift;
				// if shifting at the end
				if (newLetter > 25) {
					newLetter -= 26;
				}
				// if newletter is < 0 -then we need to shift back toward a from z;
				if (newLetter < 0) {
					newLetter += 26;
				}

				result += alphabet[newLetter];
			} else {
				//otherwise push the space or nonalphanumeric
				result += letter;
			}
		});

		return result;
	}

	return {
		caesar,
	};
})();

module.exports = { caesar: caesarModule.caesar };

/* For Testing 
 EXAMPLES TO TEST
 console.log(caesar("thinkful", 3)); //> 'wklqnixo'
 caesar("thinkful", -3); //> 'qefkhcri'
 caesar("wklqnixo", 3, false); //> 'thinkful'

// 1) Return false if ---
// console.log(caesar("thinkful")); //> false
// console.log(caesar("thinkful", 99)); //> false
//console.log(caesar("thinkful", -26)); //> false

// 2) Ignore Capital letters + loop through alphabet variable

// 3) Decode a single word!
// console.log(caesar("thinkful", 3)); //> 'wklqnixo' --working

// 4) Decode a whole sentence and decode letters on the end
// console.log(caesar("This is a secret message!", 8)); //> 'bpqa qa i amkzmb umaaiom!'

// 5) encode shifting negatively
// console.log(caesar("thinkful", -3)); //> 'qefkhcri'
// console.log(caesar("This is a secret message!", -8)); //> 'lzak ak s kwujwl ewkksyw!'

// 6) To DECODE a message
// console.log(caesar("wklqnixo", 3, false)); //> 'thinkful'
// console.log(caesar("BPQA qa I amkzmb umaaiom!", 8, false)); //> 'this is a secret message!'
*/

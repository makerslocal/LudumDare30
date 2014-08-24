/*
 * binascii.js
 * binary to ascii conversions for uploading etc. and back again
 * thanks to http://stackoverflow.com/questions/3195865/converting-byte-array-to-string-in-javascript
 */

function BinAscii()
{
	this.BinToAscii = function(array) {
		return String.fromCharCode.apply(String, array);
	};

	this.AsciiToBin = function(str) {
		var result = [];
		for (var i = 0; i < str.length; i++) {
			result.push(str.charCodeAt(i));
		}
		return result;
	};
}

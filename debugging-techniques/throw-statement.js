function validateNumber(input) {
	if (typeof input !== "number") {
		throw newTypeError("Expected a number, but received " + typeof input);
	}
	return input * 2;
}

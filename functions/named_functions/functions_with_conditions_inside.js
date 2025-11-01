function checkScore(score) {
	if (score >= 50) {
	return "You passed!";
	} else {
		return "Try again!";
	}
}

console.log(checkScore(70));
console.log(checkScore(30));

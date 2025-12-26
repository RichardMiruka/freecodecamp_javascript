const words = ["JavaScript", "is", "powerful"];

const sentence = words.reduce(function (acc, word) {
	return acc + " " + word;
});

console.log(sentence);

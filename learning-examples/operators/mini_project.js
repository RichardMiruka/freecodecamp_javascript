let score = 85;
let grade

if (score >= 90) {
	grade = "A";
} else if (score >= 75 && score < 90) {
	grade = "B";
} else if (score >=60 && score < 75) {
	grade = "C";
} else {
	grade = "F";
}

let passed = grade !== "F" ? true : false;

console.log(`Grade: ${grade}`);
console.log(passed ? "You passed!" : "You failed.");


const numbers = [3, 7, 12, 5, 9];
const target = 12;

for (let i = 0; i < numbers.length; i ++) {
	if (numbers[i] === target) {
		console.log("Found:", numbers[i]);
		break; // stop the loop
	}
}

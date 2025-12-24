let numbers = [2, 3, 5, 6, 8, 9];

let doubled = numbers.map(function(num) {
	return num * 2
});

let evenNumbers = numbers.filter(function(num) {
	return num % 2 === 0;
});

console.log(numbers);
console.log(doubled);
console.log(evenNumbers);

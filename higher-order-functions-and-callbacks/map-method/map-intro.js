// Before using map (using a for loop)

const numbers = [1, 2, 3, 4, 5, 6];
const doubled = [];

for (let i = 0; i < numbers.length; i++) {
	doubled.push(numbers[i] * 2);
}

console.log(doubled);


// map() with a regular function 

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function (num) {
	return num * 2;
});

console.log(doubled);


// map using arrow function 

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);

console.log(doubled);

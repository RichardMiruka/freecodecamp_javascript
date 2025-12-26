//filtering even numbers in an array of numbers using a for loop
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
	if(numbers[i] % 2 === 0) {
		evenNumbers.push(numbers[i]);
	}
}

console.log(evenNumbers);


// using filter method to get even numbers in an array of numbers
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(function (num) {
	return num % 2 === 0;
});

console.log(evenNumbers);


// using an arrow function
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNumbers); 


/*
 * filter() always expects a YES or NO answer (true or false)
 * map() → transforms values
 * filter() → removes value
 */

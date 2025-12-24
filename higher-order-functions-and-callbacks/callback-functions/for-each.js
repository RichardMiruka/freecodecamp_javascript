// If a function is passed as an argument and called later, it is a callback.
// What triggers the callback - Each item in an array





// callback using forEach
let numbers = [10, 20, 30];

numbers.forEach(function(number) {
	console.log(number +5);
});




// how it would look like without forEach to access the array
for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i] + 5);i
}



// understanding what is happening in the array using the callback. 
function (number) {
	console.log(number +5); 
}


number = 10;
console.log(10 + 5); // 15


number = 20;
console.log(20 + 5); // 25

number = 30;
console.log(30 + 5); // 35
//


.map()
.forEach()
.filter()
.sort()
.reduce()












/*
 * *** forEach decides when to run your function — once per array item.
 * forEach loops through the array for you
 * The function you pass in is the callback
 * For each number:
 * number becomes 10, then 20, then 30
 * number + 5 is printed each time
 * Output - 15,25,35
 */

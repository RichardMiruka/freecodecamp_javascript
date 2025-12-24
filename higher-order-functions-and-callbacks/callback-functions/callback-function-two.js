function greet(name, action) {
	console.log("Hello " + name);
	action();
}

function sayGoodbye () {
	console.log("Goodbye!");
}

greet("Alex", sayGoodbye);





// What triggers the callback - A function reaching a certain point.


// inline function
greet("Alex", function() {
	console.log("Goodbye!");
});


// arrow function
greet("Alex", () => {
	console.log("Goodbye!");
});

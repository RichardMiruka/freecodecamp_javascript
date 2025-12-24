// creating an object using object literal notation

let car = {
	brand: "Toyota", // key value
	model: "Camry",
	year: 2022,
	isElectric: false,

	// a method is a function inside an object
	// the drive method uses this to refer to the object's own property
	drive: function(){
		console.log('The ${this.brand} ${this.model} is driving!');
	}
};

	// accessing object properties - using dot notation or bracket notation
	console.log(car.brand)
	console.log(car["model"])

	// calling the object's method
	car.drive();

	// adding a new property - dynamically - JavaScript is a dynamically typed language
	car.color = "blue";

	// updating a property
	car.year = 2021;

	// log the entire object
	console.log(car);

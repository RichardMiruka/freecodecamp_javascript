// checking for the existence of a property in an object
// hasOwnProperty() method

const person = {
	name: "Alice",
	age:30
};

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("job")); // false

/*
 * In this example, we have an object called person with two properties: name and age.
 * To check if name is a property in the person object, we use the hasOwnProperty() method.
 * Since name is a property, it will return true.
 * But when we use the hasOwnProperty() to check if job is a property,
 * it will return false because it does not exist in the object. */

// in operator.
const student = {
	name: "Bob",
	age: 25
};
console.log("name" in student) // true
// In this example, "name" in person returns true because name is a property of person.


// 3. checking if a property is undefined
const car = {
	brand: "Toyota",
	model: "Corolla"
	year: 2020
};

console.log(car.brand !== undefined); // true
console.log(car.color !== undefined); // false

/*In this code, we check if car.brand and car.color are not undefined.
 * This works because accessing a non-existent property on an object returns undefined.
 * However, this method can give false negatives if a property explicitly has the value undefined. */

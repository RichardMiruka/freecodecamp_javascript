const person = {
	name: "Alice",
	age: 30,
	contact: {
		email: "alice@gmail.com",
		phone: {
			home: "123-456-7890",
			work: "098-765-4321"
		}
	}
};

// To access Alice's work phone number, you would chain the property accessors like this

console.log(person.contact.phone.work); // using dot notation
console.log(person["contact"]["phone"]["home"]); // using bracket notation. 



// how we can access data where one of the object properties has the value of an array.
const student = {
	name: "James",
	age: 28,
	addresses: [
		{type: "home", street: "123 Main str", city: "Anytown"},
		{type: "work", street: "456 Market str", city: "Juja"}
	]
};

// To access Alice's work address city:
console.log(student.addresses[1].city);

/*
 * student.addresses refers to the array of addresses.
 * To access the second address in that array, we use bracket notation and index 1.
 * Then, we use dot notation to access the city from that address object.*/

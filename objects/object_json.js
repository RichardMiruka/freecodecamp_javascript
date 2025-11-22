const user = {
	name: "John",
	age: 50,
	isAdmin: true,
	address: {
		city: "Nairobi",
		postalcode: 00100
	}
};

// Convert JavaScript object into JSON string

const jsonString = JSON.stringify(user);
console.log(jsonString);
// '{"name":"John", "age":50, "isAdmin":true, "address: {city: "Nairobi", postalcode: 00100}"}'
console.log("JSON STRING:")

// Convert JSON string back to JavaScript object
const parsedData = JSON.parse(jsonString);
console.log(parsedData);

// Accessing the JSON data - a property
console.log("name:", parsedData.name); // name: John
console.log("age:", parsedData.age);   // age: 50



// Convert JSON string back to JavaScript Object

const jsonStrings = '{"name":"Mutuku", "age":25, "isAdmin":false}';

const userObject = JSON.parse(jsonStrings);
console.log(userObject);

console.log("isAdmin:", userObject.isAdmin); 



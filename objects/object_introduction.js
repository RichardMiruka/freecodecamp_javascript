
const person = {
	name: "Mellissah",
	age: 24,
	height: 5.7,
	hobbies: ["swimming", "dancing", "reading", "sleeping"],
	addresses: [ {town: "kawangware"}, {village: "khwisero"} ], // contains an array with two objects inside it 
	"Property with space": "Majengo"
}
delete person.age;

console.log(person.addresses[0].town); // kawangware
console.log(person.name); // Mellisah
console.log(person["name"]);
console.log(person["hobbies"][0]);
console.log(person.age);
console.log(person["property with space"]);


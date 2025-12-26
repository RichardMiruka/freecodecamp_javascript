// From each user object, extract only the name


const users = [
	{name: "Melissa", age:22 },
	{name: "Hudson", age: 24 },
	{name: "Aswani", age: 23 },
];

const names = users.map(user => user.name);
console.log(names);

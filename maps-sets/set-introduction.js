// To create a Set, you use the Set constructor and assign it to a variable

const myFirstSet = new Set();

// You can also initialize the Set with values

const treeSet = new Set(["Baobab", "Jackalberry", "Mopane tree", "Breadfruit" ]);

// Lopping through a set
treeSet.forEach(tree => {
	console.log(tree);
})

console.log(treeSet);


// Real example

const numbers = [2,3,4,5,6,7,8,9,3,2,4];

const uniqueNumbers = new Set(numbers);

console.log([...uniqueNumbers]);



// add values to a set

const fruits = new Set();

fruits.add("apple");
fruits.add("banana");
fruits.add("orange");
fruits.add("avocado");
fruits.add("apple"); 

console.log(fruits);

// has method
fruits.has("banana"); // true

console.log(fruits.has("banana"));

fruits.has("guava"); // false

// delete() method
fruits.delete("banana");
console.log(fruits);

// size

console.log(fruits.size);

// clear ()

fruits.clear()
console.log(fruits);



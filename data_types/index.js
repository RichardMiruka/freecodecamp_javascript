// Non-Primitive Data Types
let person = {
    name: "Alice",
    age: 30,
    height: 5.5,
    weight: 120,
    isMarried: false,
    hobbies: ["reading", "traveling", "swimming"],
    address: {
        street: "123 Main St",
        city: "Wonderland",
        zip: "12345"
    }
}

// console.log(person.isEmployed); // Accessing a property
// console.log(person.address.city); // Accessing a nested property    
// console.log(person.hobbies[1]); // Accessing an array element 
// console.log(person.address.street); // This will throw an error because 'address' is not defined in the global scope
console.log(person.hobbies[2]);// This will throw an error because 'address' is not defined in the global scope
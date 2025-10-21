// Create an object representing a person
const person = {
  name: "Alice",
  age: 25,
  
  // Define a method that uses the object's own data
  // sayHello is a property of the object whose value is a function. - (a function that belongs to an object)

  sayHello: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);

	  // This line prints a message using template literals (the backticks ` ` allow you to embed variables easily
	
	  // ${this.name} means: - Get the value of the property name from the same object that owns this method
	  // The call pattern is object.method(), so this → object
	  //${this.age} does the same for the age property.
	  // In JavaScript, this refers to the object that the method is called on
  }
};

// Calling the method
person.sayHello(); // Output: Hello, my name is Alice and I am 25 years old.


// The method is called on the object person
// inside that method, this → refers to person
// this.name → person.name
// this.age → person.age


// This function takes no arguments - function() { ... } 
// No parameters inside the parentheses → no external values passed in directly when calling it.
// So the variables name and age are not coming from function parameters
// But it uses this - The keyword this is special in JavaScript. It doesn’t come from parameters — it’s automatically set by how you call the function.
// this depends on how the function is called, not on how it’s defined

// So, where do this.name and this.age come from?
// Here’s what happens when you call person.sayHello():
// The JavaScript engine looks at who is calling the function — it sees that the function is being called as a property of the object person
// It sets this to refer to that object — this → person
// So this.name becomes person.name and this.age becomes person.age


// What if you call it by itself?
// const greet = person.sayHello;
// greet(); // call it alone
// Now there’s no object before the dot — it’s just a plain function call.
// In strict mode, this becomes undefined
// So it will try to find this.name and this.age on the global scope — which usually doesn’t exist — and you’ll get:
// Hello, my name is undefined and I am undefined years old.


// The function doesn’t pass in an empty string
// It’s not that the function is receiving a string; it’s that the backticks (`) create a template literal, which is a string that can include embedded variables.
// So this - `Hello, my name is ${this.name} and I am ${this.age} years old.`
// is just a string template that inserts values into it dynamically.
// The backticks and ${} are just string interpolation syntax — they don’t mean “passing in” anything.
 

// testing and matching a simple word
const text = "Hello world";
const re = /world/;
console.log(re.test(text)); 

// case -insensitive search

console.log(/hello/i.test("HELLO")); 

console.log("The quick brown fox ".match(/[aeiou]/gi));

// regular exppressions are patterns used to match text with expressions within strings

// Regex literal
// RegExp constuctor
//

const regex2 = /hello/;
const regexl = "hello";

const regex = new RegExp("hello");

// .test() - checks if a pattern exists
const re = /cat/;
console.log(re.test("the cat sat"));                // true



// .match() - return what matches

const words = "one two three two";
console.log(words.match(/two/g));

// the g flag returns all global matches. 



//.replace() - replace matching text

const sentence = "I have 10 cats";
console.log(sentence.replace(/\d+/, "#"));
// \d+ matches one or more digits


console.log(/hello/i.test("xello")); 
// i - means ignore cases




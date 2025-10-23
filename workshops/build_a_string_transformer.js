// working with methods in JavaScript. - replace(), replaceAll(), repeat().

const originalString = "I love cats.";
console.log("Original string:");
console.log(originalString);

/* using the replace() method - used to locate a substring 
 * in a string and replace it with another value */
const replacedString = originalString.replace("cats", "dogs");
console.log("After using the replace() method:");
console.log(replacedString);

/* strings are immutable which means the original text is not modified
 * A new string is created instead. */
const exampleSentence = "I love cats and cats are so much fun!";
console.log("Original sentence:");
console.log(exampleSentence);

// using the replaceAll() method
const dogsOnlySentence = exampleSentence.replaceAll("cats", "dogs");
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);

const learningSentence = "I love learning!";
console.log("Original learning sentence:");
console.log(learningSentence);

// use of .repeat() method to repeat a word n times.
// use of trimEnd() method to remove extra space
const repeatedLove = "love ".repeat(3).trimEnd();
console.log(repeatedLove);

const newSentence = `I ${repeatedLove} learning.`;
console.log(newSentence);

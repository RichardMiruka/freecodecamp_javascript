 /* Functional programming is about building programs from small, pure, predictable functions and keeping side effects separate.
  * A function is pure if:
  * Same input → Same output - always predictable.
  * It does NOT change anything outside itself
*/

function add(a,b) { 
	return a + b;
}

console.log(add(2, 4));



// example 2
function multiply(c,d) {
	return c * d;
}
console.log(multiply(8, 7));
console.log(multiply(10, 20));

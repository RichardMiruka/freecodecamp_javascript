// An impure function that changes the original object


function updateAge(user) {
	user.age = 30;
	return user;
}

const person = {name: "Melissah", age: 22};
console.log(updateAge(person));

// or we could write it this way
console.log(updateAge({name: "John", age: 15}));




/* Correct Functional Way (Immutable)
 * Immutability — a core functional programming principle
 */

function updateAges(user) {
	return {...user, age: 30 };
}

const user = { name: "Hudson", age: 25 };

const updatedUser = updateAges(user);

console.log(user);
console.log(updatedUser);

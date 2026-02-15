// does not modify the user object

function getFullName(user) {
	return `${user.firstName} ${user.lastName}`;
}

const user = {firstName: "Aswani", lastName: "Nelson" };

console.log(getFullName(user));

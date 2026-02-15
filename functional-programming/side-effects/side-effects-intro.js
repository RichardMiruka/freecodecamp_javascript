/* A side effect happens when a function:
 * Changes a global variable
 * Modifies an object outside
 * Writes to database
 * Makes API calls
 * Logs to console
 * Updates DOM
 */


// this function changes something outside itself
let counter = 0;

function increment() {
	counter ++;
}

increment();                                       //call the function
increment();
increment();

console.log("Final counter:", counter);



// this function changes something outside itself
let counter = 0;

function increment() {
        counter ++;
}


// API call example.

function fetchUser() {
        return fetch("https://api.example.com/user");
}

// this interacts with the outside world => side effect


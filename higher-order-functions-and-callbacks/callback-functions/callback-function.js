function doSomething(callback) {
  console.log("Doing something..."); // first part to be executed
  callback(); // run the function that was passed in
}

function sayHi() {
  console.log("Hi!");
}

doSomething(sayHi);





function doSomething(callback) {
  console.log("Doing something...");
  callback(); // run the function that was passed in
}

function sayHi() {
  console.log("Hi!");
}

doSomething(sayHi);



/*
 * anonymous callback
 *
 doSomething(function() {
 	console.log("Hi");
 });
 * /

let passwordsTyped = ["123", "0000", "letmein", "admin123"];
let index = 0;
let correct = "admin123";

while (passwordsTyped[index] !== correct) {
	console.log("Wrong password:", passwordsTyped[index]);
	index++;
}

console.log("Access granted!");

// Parent Class
class Person {
	constructor(name) {
		this.name = name;
	}

	speak() {
		console.log("My name is " + this.name);
	}
}


// Child class (Inheritance)
class Teacher extends Person {
	constructor(name, subject) {
		super(name);
		this.subject = subject;
	}

	teach() {
		console.log(this.name + " teaches " + this.subject);
	}
}


// Teacher Object 
const teacher1 = new Teacher ("Mr Wommack", "JavaScript");

teacher1.speak();
teacher1.teach(); 

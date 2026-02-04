class Student {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	greet() {
		console.log("Hello, my name is " + this.name);
	}
}

//Creating an object Instance
const student1 = new Student("Aswani", 22);
student1.greet();

const student2 = new Student("Melissa", 20);
student2.greet();

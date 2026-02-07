class Course {
	constructor(courseName) {
		this.courseName = courseName;
		this.enrolledStudents = new Set();
	
	}

	enroll(studentEmail) {
		this.enrolledStudents.add(studentEmail);
	}

	listStudents() {
		console.log(`Students in $ {this.courseName}: `);
		this.enrolledStudents.forEach(email => console.log(email));
	}
}


const jsCourse = new Course("JavaScript Basics")

jsCourse.enroll("mutuku@gmail.com");
jsCourse.enroll("arauna@gmail.com");
jsCourse.enroll("aswani@gmail.com");
jsCourse.enroll("mutuku@gmail.com");

jsCourse.listStudents();

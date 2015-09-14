class Student {
	constructor(name='RSR', age=28) {
		this.name = name;
		this.age = age;
	}
	getDetail() {
		return this.name + ' ' + this.age;
	}
	setName(name) {
		this.name = name;
	}
}

var newStudent = new Student();
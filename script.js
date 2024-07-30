//complete this code
lass Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(newAge) {
    this._age = newAge;
  }

  // Getter for age (to access it in the example)
  get age() {
    return this._age;
  }
}

class Student extends Person {
  // Method specific to Student
  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  // Method specific to Teacher
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Create instances
const person = new Person("John", 25);
const student = new Student("Alice", 22);
const teacher = new Teacher("Bob", 40);

// Button event listeners
document.getElementById('showPerson').addEventListener('click', () => {
  console.log(`Person Name: ${person.name}`);
  console.log(`Person Age: ${person.age}`);
  person.age = 30; // Update age
  console.log(`Updated Person Age: ${person.age}`);
});

document.getElementById('showStudent').addEventListener('click', () => {
  student.study(); // Call method specific to Student
});

document.getElementById('showTeacher').addEventListener('click', () => {
  teacher.teach(); // Call method specific to Teacher
});
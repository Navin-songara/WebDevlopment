// Constructor and inheritance :- if we define constructor in base and derived classes and create object of derived class base class constructor always execute before the derived class constructor .
// Explain defualt constructor with single inheritance 
// Base class
class School {
    constructor() {
        this.scode = 1;
        this.sname = "DPS";
        console.log("Default Constructor Base Class");
    }

    showSchool() {
        console.log("School Code = " + this.scode);
        console.log("School Name = " + this.sname);
    }
}

// Derived class
class Student extends School {
    constructor() {
        super();  // Calling the constructor of the base class (School)
        this.rno = 1000;
        this.stname = "ABC Kumar";
        this.marks = 420;
        console.log("Default Constructor Derived Class");
    }

    showStudent() {
        console.log("Roll No = " + this.rno);
        console.log("Student Name = " + this.stname);
        console.log("Marks = " + this.marks);
    }
}

// Creating an object of the derived class
var s1 = new Student();

// Calling methods from both base and derived class
s1.showSchool();
s1.showStudent();

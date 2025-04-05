// MultiLevel inheritance :- to create one derived class from one base class and agian
//  create one more derived class from previously created derived class. previous derived 
// class will be base class for next derived class.

// DIAGRAM 
// class A super base 
// class B child base 
// class C derive 
// syntax :- 
// class A 
// {
//     - -
//     - -
// }
// class B extends A
// {
//     - -
//     - -
// }
// class C extends B
// {
//     - -
//     - -
// }
// create Object of derived class C and access properties of class A,B and C. 

// var object name = new derived classname();

// Like was obj1=neurc();


// Example multilevel inheritance 
// Example of multi-level inheritance

class company {
    constructor() {
        this.cid;
        this.cname;
    }
    
    setCompData(cid, cname) {
        this.cid = cid;
        this.cname = cname;
    }
    
    showCompData() {
        console.log("Company ID = " + this.cid);
        console.log("Company Name = " + this.cname);
    }
}

class Department extends company {
    constructor() {
        super();  // Calling the parent class constructor
        this.dno;
        this.dname;
    }
    
    setDeptData(dno, dname) {
        this.dno = dno;
        this.dname = dname;
    }
    
    showDeptData() {
        console.log("Department No = " + this.dno);
        console.log("Department Name = " + this.dname);
    }
}

class Employee extends Department {
    constructor() {
        super();  // Calling the parent class constructor
        this.ecode;
        this.ename;
        this.esal;
    }
    
    setEmpData(ecode, ename, esal) {
        this.ecode = ecode;
        this.ename = ename;
        this.esal = esal;
    }
    
    showEmpData() {
        console.log("Employee Code = " + this.ecode);
        console.log("Employee Name = " + this.ename);
        console.log("Employee Salary = " + this.esal);
    }
}

// Create an object of the Employee class (which inherits from Department and Company)
var e1 = new Employee();

// Setting data for the company, department, and employee
e1.setCompData(1, "TCS");
e1.setDeptData(11, "Development");
e1.setEmpData(1001, "Anil", 50000);

// Displaying the data using inherited methods
e1.showCompData();
e1.showDeptData();
e1.showEmpData();

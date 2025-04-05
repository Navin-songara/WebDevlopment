// Example of single inheritance
class school {
    constructor() {
        this.scode;
        this.sname;
    }
    
    set SchData([scode, sname]) {  // Destructuring the array into individual parameters
        this.scode = scode;
        this.sname = sname;
    }
    
    showSchData() {
        console.log("School Code = " + this.scode);
        console.log("School Name = " + this.sname);
    }
}

class Faculty extends school {
    constructor() {
        super();  // Calling the parent class constructor
        this.fid;
        this.fname;
        this.fsal;
    }
    
    setFacData(fid, fname, fsal) {
        this.fid = fid;
        this.fname = fname;
        this.fsal = fsal;
    }
    
    showFactData() {
        console.log("Faculty ID = " + this.fid);
        console.log("Faculty Name = " + this.fname);
        console.log("Salary = " + this.fsal);
    }
}

var obj1 = new Faculty();
obj1.SchData = [1, "DPS"];  // Passing an array, which is now destructured in the setter
obj1.setFacData(1008, "Amit Jain", 420000);
obj1.showSchData();
obj1.showFactData();

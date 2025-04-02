// Example parameterized cosntructor

class student
{
    constructor(rno,sname,marks)
    {
        this.rno=rno;
        this.sname=sname;
        this.marks=marks;
        console.log("parameterized constructor invoked");
    }
    showDetails()
    {
        console.log("RollNO="+this.rno+"Name="+this.sname+"Marks="+this.marks);
    }
}
var s1=new student(101,"Amit",4000);
var s2=new student(102,"Sumit",7000);
s1.showDetails();
s2.showDetails();
// Example default constructor 

class student
{
    constructor()
    {
        this.rno=100;
        this.sname="guest";
        this.marks= 500;
        console.log("default constructor invoked");
    }
    showDetails()
    {
        console.log("RollNO="+this.rno+"Name="+this.sname+"Marks="+this.marks);
    }
}
var s1=new student();
var s2=new student();
s1.showDetails();
s2.showDetails();
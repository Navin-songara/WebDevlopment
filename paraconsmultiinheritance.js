// Class A
class A {
    constructor(x) {
        this.x = x;
        console.log("Parameterized constructor class A");
    }

    showX() {
        console.log("Value of x = " + this.x);  // Corrected the string concatenation
    }
}

// Class B extends A (Multi-level inheritance)
class B extends A {
    constructor(x, y) {
        super(x);  // Calling the constructor of class A
        this.y = y;
        console.log("Parameterized constructor class B");
    }

    showY() {
        console.log("Value of y = " + this.y);
    }
}

// Class C extends B
class C extends B {
    constructor(x, y, z) {
        super(x, y);  // Calling the constructor of class B
        this.z = z;
        console.log("Parameterized constructor class C");
    }

    showZ() {
        console.log("Value of z = " + this.z);
    }
}

// Creating an object of class C
var s1 = new C(10, 20, 30);

// Calling the methods
s1.showX();  // From class A
s1.showY();  // From class B
s1.showZ();  // From class C

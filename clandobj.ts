class Employee {
//field
name:string;
//constructor
constructor(name:string) {
this.name = name;
}
//function
display():void {
console.log("Employee Name: "+this.name);
}
} //create an object
var obj = new Employee("Jai"); //access the field
console.log("Employee Name: "+obj.name); //access the function
obj.display();

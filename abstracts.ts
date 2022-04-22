/*abstract class className {
   // declare fields
   // declare abstract/non-abstract methods
}*/

abstract class Department {
 
    constructor(public name: string) {
    }
 
    printName(): void {
        console.log("Department name: " + this.name);
    }
 
    abstract printMeeting(): void; 
}
 
class SMDepartment extends Department {
 
    constructor() {
        super("Sales and Marketing"); 
    }
 
    printMeeting(): void {
        console.log("The S&M Department meets each Monday at 10am.");
    }
 
    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

let department: Department;
department = new SMDepartment();
department.printName();
department.printMeeting();
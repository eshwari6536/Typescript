interface Candidate { 
   age:number;
   name:string;
} 
 
interface Student extends Candidate { 
   studId:string; 
} 
 
var clleader = <Student>{}; 
clleader.age = 13; 
clleader.name = "Jai Anand Murali";
clleader.studId = "126083A";
console.log("Class Leader Name:  "+clleader.name);
console.log("Age:  "+clleader.age);
console.log("Student Id:  "+clleader.studId);
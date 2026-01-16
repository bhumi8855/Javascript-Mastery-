let basicSalary=20000;

//Allowances(percentage)

let hra=basicSalary*0.20;
let da=basicSalary*0.10;
let ta=basicSalary*0.05;

let grossSalary=basicSalary+ hra + da + ta;

console.log("----Employee Salary Calculator----");
console.log("Basic Salary:",basicSalary);
console.log("HRA (20%):",hra);
console.log("DA (10%):",da);
console.log("TA (5%):",ta);
console.log("Gross Salary:"+grossSalary);

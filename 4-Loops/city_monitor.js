//City info using for..in loop
let city={
  name:"Pune",
  zone:"West",
  population:"Urban"
};

console.log("City information");
for(key in city){
    console.log(key,":",city[key]);
}

//Electricity usage per hour using for loop
console.log("\n Electricity Usage");
let usage=[120,140,160,180,200];

for(let i=0;i<usage.length;i++){
   console.log("Hour",i+1,"->",usage[i],"units");
}

//Water tank filling using while loop
console.log("\n Water Tank Filling");
let waterLevel=0;
let tankCapacity=500;
while(waterLevel<tankCapacity){
    waterLevel+=100;
    console.log("Water Level:",waterLevel,"litres");
}

//System check alerts using do..while lop
console.log("\nSystem Health Check");
let check=1;

do{
    console.log("Health Check Round:",check);
    check++;
}while(check<=2);

//Active alerts list using for..of loop
console.log("\nActive Alerts");
let alerts=["Low Voltage","Pipe Leakage","High Consumption"];

for(let alert of alerts){
   console.log(alert);
}
console.log("\n ✔Smart City Monitoring Completed");


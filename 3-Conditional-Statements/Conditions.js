1.//if stmt example
let n=5;
if(n>0){
    console.log("Positive Number");
}

2.//if-else example
let num=8;

if(num%2===0){
    console.log("Even");
}
else{
    console.log("Odd");
}

3.
let age=18;

if(age>=18){
     console.log("Eligible to vote");
}
else{
    console.log("Not Eligible");
}

4.
let a=10,b=20;

if(a>b){
    console.log("A is larger");
}
else{
    console.log("B is larger");
}

5.//nested else-if
let marks=91;

if(marks>=90){
    console.log("Grade A");
}
else if(marks>=75){
    console.log("Grade B");
}
else if(marks>=60){
    console.log("Grade C");
}
else{
    console.log("Grade D");
}

6.
let day=3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

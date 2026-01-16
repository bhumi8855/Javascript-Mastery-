let marks=[35,78,90,42,80];

//Increase marks by 5(map)
let updatedMarks=marks.map(mark=>mark+5);

//Passed students(filter)
let passed=updatedMarks.filter(mark=>mark>=40);

let total=passed.reduce((sum,mark)=>sum+mark,0);

passed.sort((a,b)=>b-a);

//Display marks (forEach)
console.log("Student Marks:");
passed.forEach(mark=>console.log(mark));
console.log("Total Marks:",total);
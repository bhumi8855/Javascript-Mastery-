//1.Array Creation
let todolist=[];

//2.Adding tasks (push)
todolist.push("Learn Javascript");
todolist.push("Practice JS concepts");
todolist.push("Build Mini Projects");

//3.Accessing array elements
console.log("First Task:",todolist[0]);

//4.Updating an elements
todolist[1]="Practice JS concepts in detail";

//5.Array length
console.log("Total Tasks:",todolist.length);

//6.Checking task includes or exists
if(todolist.includes("Build Mini Projects")){
    console.log("Task found in list");
}

//7.Removing last task(pop)
todolist.pop();
//agaion push 
todolist.push("Build Mini Projects");
//8.Looping through array
console.log("Todo list:");
for(let i=0;i<todolist.length;i++){
    console.log(i+1 +"."+todolist[i]);
}
let contact={
    name:"Bhumika",
    phone:"8855081276",
    email:"bhumikavadar8855@gmail.com",
    address:{
        city:"Jaysingpur",
        state:"MH",
        }
};

//Update phone number 
contact.phone="8855091276";

//Add new property
contact.company="Google";

//Display contact 
for(let key in contact){
    console.log(key+":",contact[key]);
}

function convertToJSON() {
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let skill=document.getElementById("skill").value;

    let user={
        name:name,
        email:email,
        skill:skill
    };

    let jsonData=JSON.stringify(user,null,2);

    document.getElementById("output").textContent=jsonData;
}

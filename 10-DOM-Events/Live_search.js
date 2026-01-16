function searchitem(){
    let input=document.getElementById("searchBox").value.toLowerCase();
    let items=document.getElementById("itemList").getElementsByTagName("li");


for (let i=0;i<items.length;i++){
    let text=items[i].innerText.toLowerCase();
    if(text.includes(input)){
        items[i].style.display="block";
    }else{
        items[i].style.display="none";
    }
    }
}

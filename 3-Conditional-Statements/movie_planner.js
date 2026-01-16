//Check internet availability using (if)

let internet=prompt("Do you have internet?(yes/no)");
let mood = prompt("Your mood ?(happy/sad/bored)");
let budget = prompt("Your budget?(low/high)");

if(internet=="no"){
    console.log("😂Watch downloaded movies or TV shows");
}
else{
    if(mood=="happy"){
        console.log("😁Watch a comedy movie");
    }
    else if(mood=="sad"){
        console.log("😊Watch a Feel-Good movie");
    }
    else if(mood=="bored"){
        let genre=prompt("Choose genre: action/thriller");

        switch(genre){
            case "action":
                console.log("Action Movie Selected");
                break;
            case "thriller":
                console.log("Thriller Movie Selected");
                break;
            default:
                console.log("Any fun movie is fine");
        }
    }
    else{
        console.log("Invalid mood");
    }

    if(budget=="low"){
        console.log("Choose free or Youtube movies");
    }
    else{
        console.log("You can rent or watch premium content");
    }
}
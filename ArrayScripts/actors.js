"use strict"

let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ];


   for (let i = 0; i < academyMembers.length; i++) {
    if (academyMembers[i].memID.toString().endsWith('187')) {
        console.log(`Person whose ID is ending in 187 is: ${academyMembers[i].name}`);
    }
}


for(let i = 0; i < academyMembers.length; i++){
    if(academyMembers[i].films.length >= 3){
        console.log(`These people have been in more than 3 films: ${academyMembers[i].name}`)
    }
}


for(let i = 0; i < academyMembers.length; i++){
    if(academyMembers[i].name.indexOf("Bob") !== -1){
        console.log(`${academyMembers[i].name} starts with Bob.`)
    }
}


let membersWithFilmStartingWithA = []

for (let i = 0; i < academyMembers.length; i++) {
    let filmNames = academyMembers[i].films;

    for (let j = 0; j < filmNames.length; j++) {
        
            if(filmNames[j].charAt(0) === "A"){
            membersWithFilmStartingWithA.push(academyMembers[i].name);
            break;
        }
    }
}

if (membersWithFilmStartingWithA.length > 0) {
    console.log(`Members who have been in films starting with A: ${membersWithFilmStartingWithA.join(', ')}`);
}

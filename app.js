let who = ["My dog", "My son", "My daughter", "My neighbour"];
let action = ["chewed", "ate", "destroyed", "jackhammered"];
let what = ["my car's tyres", "the front door", "the neighbour's dog", "a passerby"];
let when = ["while I was coding this.", "during the president's speech.", "as I was making lasagna.", "just before I left the house."];

// window.onload function generateExcuse() {
    function generateExcuse(){
    let randomWho = who[(Math.floor(Math.random() * who.length))];
    let randomAction = action[(Math.floor(Math.random() * action.length))];
    let randomWhat = what[(Math.floor(Math.random() * what.length))];
    let randomWhen = when[(Math.floor(Math.random() * when.length))];

    return console.log(randomWho +" "+ randomAction +" "+ randomWhat +" "+ randomWhen);
}

generateExcuse();

// document.getElementById("excuse").innerHTML = excuseGenerator();

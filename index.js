var randomDice = Math.floor(Math.random() * 6) + 1;
var dicee = "dice" + randomDice + ".png";
var after = "images/" + dicee;
var afterthat = document.querySelectorAll("img")[0].setAttribute("src",after);

var randomDice2 = Math.floor(Math.random() * 6) + 1;
var dicee2 = "dice" + randomDice2 + ".png";
var after2 = "images/" + dicee2;
var afterthat2 = document.querySelectorAll("img")[1].setAttribute("src",after2);

if (randomDice > randomDice2){
    document.querySelector("h1").innerHTML = "Player 1 🏆";


}else if (randomDice < randomDice2) {
    document.querySelector("h1").innerHTML = "Player 2 🏆";
}else{
    document.querySelector("h1").innerHTML = " Draw ";
}

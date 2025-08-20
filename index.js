var randomNumber1=Math.floor(Math.random()*6)+1
var randomDiceImage="dice" + randomNumber1 + ".png"
var randomImages="images/" + randomDiceImage 
document.querySelectorAll("img")[0].setAttribute("src",randomImages)
//2nd image
var randomNumber2=Math.floor(Math.random()*6)+1
var randomDiceImage2="dice" + randomNumber2 + ".png"
var randomImages2="images/" + randomDiceImage2 
document.querySelectorAll("img")[1].setAttribute("src",randomImages2)

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 wins"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins🚩"
}
else{
    document.querySelector("h1").innerHTML="Draw!!"
}

var refresh=document.querySelector(".btn2")
function onclick(){
    location.reload();
}
refresh.addEventListener("click",onclick)
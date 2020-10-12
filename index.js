var randomNumber = Math.floor(Math.random() * 6) + 1;

var randomImage = "images/dice" + randomNumber + ".png";

var randomSource  = document.querySelectorAll("img")[0].setAttribute("src" , randomImage);

var randomNumber2 = Math.floor(Math.random() *6 ) + 1;

document.querySelectorAll("img")[1].setAttribute("src" ,"images/dice" + randomNumber2 + ".png");


if (randomNumber > randomNumber2) {

	document.querySelector("h1").innerHTML = "Asma Win The Game!";
}
else if (randomNumber2 > randomNumber) {
	document.querySelector("h1").innerHTML = "Mohib Win The Game!";
}
else{
	document.querySelector("h1").innerHTML = " Draw!";
}

let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let text = document.querySelector("h3");
let body = document.getElementById("gradient");


console.log(color1.value, "color1");
console.log(color2.value, "color2");

function colorChange() {
	body.style.background= "linear-gradient(to right," 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
}


color1.addEventListener("input", colorChange);

color2.addEventListener("input", colorChange);
	
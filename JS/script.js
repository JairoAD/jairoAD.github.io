"use strict";

//Responsive NavBar
const links = document.querySelector(".links");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
	links.classList.toggle("show-links")
	menuBtn.classList.toggle("open")
})


var i = 0;
var txt = ' IN SOFTWARE DEVELOPMENT'; 
var speed = 100; 
setTimeout(() => {
	typeWriter();
}, "1000");

function typeWriter() {
	if (i < txt.length) {
		document.getElementById("typetxt").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}

}

//Project Card Flipping
const card = document.querySelectorAll(".project__cards");

card.forEach(e =>{
	e.addEventListener("click",()=>{
		e.classList.toggle("is-flipped");
	})
})

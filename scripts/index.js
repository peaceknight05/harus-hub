import { getCookie } from "./utils.js";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

var gate = document.getElementById("gate");
var gateDocument = 'contentDocument' in gate ? gate.contentDocument : gate.contentWindow.document;
if (getCookie("gate", gateDocument.cookie) == "true")
    document.getElementById("links-link").href = "/links";
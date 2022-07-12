'use strict';

const switchBtn = document.querySelector('.theme-btn');
const navItems = document.querySelectorAll('.nav-item');
const submitBtn = document.querySelector('button[type="submit"]');
const emailInput = document.querySelector('#email');
const textarea = document.querySelector('textarea');
const form = document.querySelector('form');


let theme = localStorage.getItem("theme");
if (theme === "dark") document.body.classList.add("dark");
else document.body.classList.add("light");


switchBtn.addEventListener("click", switchPageTheme);
navItems.forEach(item => item.addEventListener("click", (e) => goToSection(e)));
form.addEventListener('submit', (e) => validate(e));
window.addEventListener('scroll', displayShadow);


function displayShadow() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY >= 450) {
        navbar.classList.remove('disableShadow');
        navbar.classList.add('activeShadow');
    }
    if (window.scrollY < 450) {
        navbar.classList.remove('activeShadow');
        navbar.classList.add('disableShadow');
    }
}

function validate(e) { 
    if (emailInput.value == '' || textarea.value == '') {
        e.preventDefault();
    }
}

function goToSection(e) {
    const key = e.target.dataset.key;
    const section = document.querySelector(`#${key}`);

    window.scrollTo({
        top: section.getBoundingClientRect().top + window.pageYOffset - 115,
        behavior: 'smooth'
    });
} 

function switchPageTheme() {

    if (theme === "dark") {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        theme = "light";
    } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        theme = "dark";
    }
    localStorage.setItem("theme", theme);
}
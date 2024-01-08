'use strict'

// Cuando hago 'click' en .header__button
    // Le TOGGLE 'active' a .header__nav
    // Le TOGGLE 'active' a .header__button

const headerButton = document.querySelector('.header__button')
const headerNav = document.querySelector('.header__nav')

console.log(headerButton)
console.log(headerNav)

headerButton.addEventListener('click' , function(){
    headerNav.classList.toggle('active')
    headerButton.classList.toggle('active')
})
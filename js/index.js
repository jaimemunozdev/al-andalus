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

//  Cuando hago CLICK en .update__button
    // .update__largo hace TRANSLATEX() -> INDEX * (100 / 4)
    // Le REMOVE 'active' a TODOS .update__button
    // Le ADD 'active' a .update__button de MISMO INDEX

    const updateButton = document.querySelectorAll('.update__button')
    const updateLargo = document.querySelector('.update__largo')
    
    console.log(updateButton)
    console.log(updateLargo)
    
    updateButton.forEach(function(eachUpdateButton , index){
        updateButton[index].addEventListener('click' , function(){
    
            let calculo = index * (100 / 4)
            console.log( calculo )
    
            updateLargo.style.transform = `translateX(-${calculo}%)`
            updateButton.forEach(function(eachUpdateButton , index){
                updateButton[index].classList.remove('active')
            })
            updateButton[index].classList.add('active')
        })
    })

// Cuando CLICK en .finder__button
    // Le ADD 'active' a .finder__andalucia
    // Le ADD 'active' a .finder__ul
    // Le ADD 'active' a .finder__back
    // Le ADD 'active' a .finder__pistas de MISMO INDEX
    // Le ADD 'active' a .finder__provincia de MISMO INDEX

const finderButton = document.querySelectorAll('.finder__button')
const finderAndalucia = document.querySelector('.finder__andalucia')
const finderUl = document.querySelector('.finder__ul')
const finderPistas = document.querySelectorAll('.finder__pistas')
const finderBack = document.querySelector('.finder__back')
const finderButtonPistas = document.querySelectorAll('.finder__button.pistas')
const finderProvincia = document.querySelectorAll('.finder__provincia')

console.log(finderButton)
console.log(finderAndalucia)
console.log(finderUl)
console.log(finderPistas)
console.log(finderBack)
console.log(finderProvincia)

finderButton.forEach(function(eachButton , index){
    finderButton[index].addEventListener('click' , function(){
        finderAndalucia.classList.add('active')
        finderUl.classList.add('active')
        finderPistas[index].classList.add('active')
        finderBack.classList.add('active')
        finderProvincia[index].classList.add('active')
    })
})

// Cuando CLICK en .finder__back
    // Le REMOVE 'active' a .finder__back
    // Le REMOVE 'active' a .finder__ul
    // Le REMOVE 'active' a .finder__andalucia
    // Le REMOVE 'active' a TODOS los .finder__provincia
    // Le REMOVE 'active' a TODOS los .finder__pistas

finderBack.addEventListener('click' , function(){
    finderBack.classList.remove('active')
    finderUl.classList.remove('active')
    finderAndalucia.classList.remove('active')
    finderProvincia.forEach(function(eachProvincia , index){
        finderProvincia[index].classList.remove('active')
    })
    finderPistas.forEach(function(eachPistas , index){
        finderPistas[index].classList.remove('active')
    })
})

// Cuando hago CLICK en .finder__button.pistas
    // Le ADD 'active' a .lightbox
    // Le ADD 'active' a .lightbox__pista del MISMO INDEX
    // Le REMOVE 'active' a .finder__back

const lightbox = document.querySelector('.lightbox')
const lightboxPista = document.querySelectorAll('.lightbox__pista')
const alturasLightbox = []

console.log(lightbox)
console.log(lightboxPista)

lightboxPista.forEach(function(eachLightboxPista , index){
    alturasLightbox.push(lightboxPista[index].offsetHeight)
})

console.log(alturasLightbox)



finderButtonPistas.forEach(function(eachButtonPista , index){
    finderButtonPistas[index].addEventListener('click' , function(){
        lightbox.classList.add('active')
        lightboxPista[index].classList.add('active')
        finderBack.classList.remove('active')
    })
})

// Cuando hago CLICK en lightbox__button
    // Le REMOVE 'active' a .lightbox
    // Le REMOVE 'active' a TODOS .lightbox__pista
    // Le ADD 'active' a .finder__back

const lightboxButton = document.querySelectorAll('.lightbox__button')

    lightboxButton.forEach(function(eachLightboxButton , index){
        lightboxButton[index].addEventListener('click' , function(){
            lightbox.classList.remove('active')
            lightboxPista.forEach(function(eachLichtboxPista , index){
                lightboxPista[index].classList.remove('active')
            })
            finderBack.classList.add('active')
        })
    })

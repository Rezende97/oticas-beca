let abreMenu      = document.querySelector('.abreMenu');
let fechaMenu     = document.querySelector('.fechaMenu');
let menu          = document.querySelector('.menu');
let body          = document.querySelector('body');
let menuHome      = document.querySelector('.menuHome');
let menuSobre     = document.querySelector('.menuSobre');
let menuProduto   = document.querySelector('.menuProduto');
let menuContato   = document.querySelector('.menuContato');


abreMenu.addEventListener('click', () => {
    
    menu.classList.add('mostraMenu')
    abreMenu.classList.add('removeMenuHamburguer')
    fechaMenu.classList.add('abreMenuCancela')
    body.style.overflow = 'hidden'

})

fechaMenu.addEventListener('click', () => {

    menu.classList.remove('mostraMenu')
    abreMenu.classList.remove('removeMenuHamburguer')
    fechaMenu.classList.remove('abreMenuCancela')
    body.style.overflow = 'visible'

})

menuHome.addEventListener('click', () => {
    menu.classList.remove('mostraMenu')
    abreMenu.classList.remove('removeMenuHamburguer')
    fechaMenu.classList.remove('abreMenuCancela')
    body.style.overflow = 'visible'
})

menuSobre.addEventListener('click', () => {
    menu.classList.remove('mostraMenu')
    abreMenu.classList.remove('removeMenuHamburguer')
    fechaMenu.classList.remove('abreMenuCancela')
    body.style.overflow = 'visible'
})

menuProduto.addEventListener('click', () => {
    menu.classList.remove('mostraMenu')
    abreMenu.classList.remove('removeMenuHamburguer')
    fechaMenu.classList.remove('abreMenuCancela')
    body.style.overflow = 'visible'
})

menuContato.addEventListener('click', () => {
    menu.classList.remove('mostraMenu')
    abreMenu.classList.remove('removeMenuHamburguer')
    fechaMenu.classList.remove('abreMenuCancela')
    body.style.overflow = 'visible'
})

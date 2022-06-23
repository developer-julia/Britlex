let headerBurger = document.querySelector('.burger-menu')
let headerMenu = document.querySelector('.header__menu')
let headerBody = document.querySelector('.body')

headerBurger.addEventListener('click', function () {
    headerMenu.classList.toggle('header__menu_active')
    headerBurger.classList.toggle('burger-menu_active')
    headerBody.classList.toggle('body-lock')
})

// Закрытие меню при клике на пункт меню
const menuLinks = document.querySelectorAll('.menu__link');
menuLinks.forEach(link => link.addEventListener("click", () => {
    headerMenu.classList.remove('header__menu_active')
    headerBurger.classList.remove('burger-menu_active')
    headerBody.classList.remove('body-lock')
}))

/*=============== page scroll ==========================*/
const smoothLinks = document.querySelectorAll('a[href^="#"]')
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault()
        const id = smoothLink.getAttribute('href')

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

// /*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.querySelector('.header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 1) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
document.addEventListener('DOMContentLoaded', () => {
    const btnBurger = document.querySelector('.hamburger');
    const nav = document.querySelector('.header__list');

    btnBurger.addEventListener('click', () => {
        nav.classList.toggle('show');
        btnBurger.classList.toggle('open');
    });

});
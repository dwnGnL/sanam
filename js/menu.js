let menu = document.querySelector('.header__list');
let menuButton = document.querySelector('.menu-button');

menuButton.onclick = () => {
    menuButton.classList.toggle('active');
    menu.classList.toggle('is-open');
    // if (menuButton.classList.contains('active')) {
    //     menu.classList.add('is-open');
    //     setTimeout(() => menu.classList.add('show-menu'), 0);
    // } else {
    //     menu.classList.remove('show-menu');
    //     setTimeout(() => menu.classList.remove('is-open'), 300);
    // };
};
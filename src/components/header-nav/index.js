const toggleMenu = () => {
    const menu = document.querySelector(".mobail-menu");
    const burgerBtn = document.querySelector('.burger');

    burgerBtn.classList.toggle("active");
    menu.classList.toggle("mobail-menu--active");
}

export const renderHeaderNav = () => {
    const burgerBtn = document.getElementById("burger-btn");
    const closeBtn = document.getElementById("burger-close-btn");
    burgerBtn.onclick = toggleMenu;
    closeBtn.onclick = toggleMenu;
};


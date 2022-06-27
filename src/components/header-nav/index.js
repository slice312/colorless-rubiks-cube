const toggleMenu = () => {
    const menu = document.getElementById("mobile-menu");
    const burgerBtn = document.querySelector('.burger');

    burgerBtn.classList.toggle("active");
    menu.classList.toggle("mobile-menu__active");
};

export const renderHeaderNav = () => {
    const burgerBtn = document.getElementById("burger-btn");
    const closeBtn = document.getElementById("burger-close-btn");
    burgerBtn.onclick = toggleMenu;
    closeBtn.onclick = toggleMenu;
    setActiveNavLink();
};


const setActiveNavLink = () => {
    Array.from(document.querySelectorAll(".menu__link"))
        .filter(x => x.href === window.location.href)
        .forEach(x => x.classList.add("menu__link_active"));
};
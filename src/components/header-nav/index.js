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
    setActiveNavLink();
};



const setActiveNavLink = () => {
    const {pathname} = new URL(window.location.href);

    let activeLink = null;
    if (pathname === "/")
        activeLink = document.getElementById("nav-link-consultation");
    else if (pathname === "/services.html")
        activeLink = document.getElementById("nav-link-services");
    else if (pathname === "/training-list.html")
        activeLink = document.getElementById("nav-link-training-list");


    activeLink?.classList.add("menu__link_active");
};
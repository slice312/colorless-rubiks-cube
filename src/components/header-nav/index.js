export const renderHeaderNav = () => {
    const burgerMenu = document.getElementById("burger-menu");
    const burgerBtnOpen = document.getElementById("burger-btn-open");
    const burgerBtnClose = document.getElementById("burger-btn-close");

    burgerBtnOpen.onclick = () => burgerMenu.classList.toggle("burger-menu_active");
    burgerBtnClose.onclick = () => burgerMenu.classList.toggle("burger-menu_active");
}
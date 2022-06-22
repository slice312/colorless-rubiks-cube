export const burger = () => {
    const burgerMenu = document.getElementById("burger-menu");

    const burgerBtnOpen = document.getElementById("burger-btn-open");
    const burgerBtnClose = document.getElementById("burger-btn-close");

    function toggleClassMenu(element) {
        element.addEventListener('click', function () {
            burgerMenu.classList.toggle('burger-menu_active');
        })
    }

    toggleClassMenu(burgerBtnOpen);
    toggleClassMenu(burgerBtnClose);
}
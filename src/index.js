import "./styles/index.scss";
import {renderHeaderNav} from "./components/header-nav";
import {renderPreview} from "./components/mainPage/preview";
import {ModalOrder} from "./components/modalOrder";


const render = () => {
    renderHeaderNav();
    renderPreview();
    ModalOrder.render();
};


document.addEventListener("DOMContentLoaded", render);
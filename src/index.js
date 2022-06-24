import "./styles/index.scss";
import {renderHeaderNav} from "./components/header-nav";
import {renderPreview} from "/src/components/mainPage/preview";
import {ModalOrder} from "./components/modalOrder";


export const render = () => {
    renderHeaderNav();
    renderPreview();

    const btnTrainingItemMore = document.getElementById("btn-training-item-more");
    if (btnTrainingItemMore) {
        btnTrainingItemMore.onclick = () => {
            window.location.href = "./training.html";
        }
    }


    ModalOrder.render();
};


document.addEventListener("DOMContentLoaded", render);


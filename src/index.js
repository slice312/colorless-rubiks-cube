import "./styles/index.scss";
import {renderHeaderNav} from "./components/header-nav";
import {renderPreview} from "./components/main-page/preview";
import {renderConsultationForm} from "./components/consultation-form";
import {ModalOrder} from "./components/modal-order";



export const render = () => {
    renderHeaderNav();
    renderPreview();
    renderConsultationForm();

    const btnTrainingItemMore = document.getElementById("btn-training-item-more");
    if (btnTrainingItemMore) {
        btnTrainingItemMore.onclick = () => {
            window.location.href = "./training.html";
        }
    }

    ModalOrder.render();
};


document.addEventListener("DOMContentLoaded", render);


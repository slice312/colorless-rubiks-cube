import "./styles/index.scss";

import {renderHeaderNav} from "./components/header-nav/index.js";
import {Validator} from "./validation";


const render = () => {
    renderHeaderNav()


    // TODO: перенести в другйо файл
    let openBtn = document.getElementById("btn-discuss-issue");
    let closeBtn = document.querySelector(".modal-page__close");

    openBtn.addEventListener("click", () => {
        openModal();
    })

    closeBtn.addEventListener("click", () => {
        closeModal();
    })

    const openModal = () => {
        const modal = document.getElementById("modal-order");
        modal.classList.add("modal-order_open");
        document.body.classList.add("modal-open");
    };

    const closeModal = () => {
        const modalOrder = document.getElementById("modal-order");
        document.body.classList.remove("modal-open");
        modalOrder.classList.remove("modal-order_open");
        resetState();
    };


    const form = document.getElementById("modal-order-form");

    const resetState = () => {
        form.reset();
        Validator.clearErrorsAll();
    }


    form.onsubmit = (e) => {
        e.preventDefault(); // прервать перезагрузку страницы
        // debugger
        Validator.validate();
        Validator.setClearErrorsHandlers();
        // Validator.clearErrorsAll();
        //
        // // таймаут для анимации мигания перед валидацией
        // setTimeout(() => {
        //     const isValid = Validator.validateAll();
        //     if (isValid) {
        //         setActivityIndicator(true);
        //         void postFormData(form);
        //     }
        // }, 70);
    };
};


document.addEventListener("DOMContentLoaded", render);
import {Validator} from "./validation";


const form = document.getElementById("modal-order-form");
const btnClose = document.getElementById("modal-order-btn-close");
const btnSubmit = document.getElementById("modal-order-btn-submit");
const labelSuccess = document.getElementById("modal-order-label-success");


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

const resetState = () => {
    form.reset();
    Validator.clearErrorsAll();

    labelSuccess.style.visibility = "hidden";
    btnSubmit.innerText = "Отправить";
    btnSubmit.disabled = false;
};

const onFormSubmit = (e) => {
    e.preventDefault(); // прервать перезагрузку страницы
    Validator.clearErrorsAll();

    // таймаут для анимации мигания перед валидацией
    setTimeout(async () => {
        const isValid = Validator.validateAll();
        Validator.setClearErrorsHandlers();

        if (isValid) {
            btnSubmit.innerText = "Идет отправка...";
            btnSubmit.disabled = true;
            await postFormData();

            resetState();
            labelSuccess.style.visibility = "visible";
        }
    }, 70);
};

const postFormData = async () => {
    const formData = {
        name: form.elements.name.value,
        email: form.elements.email.value,
        plan: form.elements.issue.value
    };

    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Posted Form Data", formData);
};


const render = () => {
    btnClose.onclick = closeModal;
    form.onsubmit = onFormSubmit
};


export const ModalOrder = {
    openModal,
    closeModal,
    render
}
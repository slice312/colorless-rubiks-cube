import {ConsultationFormValidator} from "./validation";


const form = document.getElementById("consultation-form");
const btnSubmit = document.getElementById("consultation-form-btn-submit");


export const renderConsultationForm = () => {
    if (form)
        form.onsubmit = onFormSubmit;
}


const onFormSubmit = (e) => {
    e.preventDefault(); // прервать перезагрузку страницы
    ConsultationFormValidator.clearErrorsAll();

    // таймаут для анимации мигания перед валидацией
    setTimeout(async () => {
        const isValid = ConsultationFormValidator.validateAll();
        ConsultationFormValidator.setClearErrorsHandlers();

        if (isValid) {
            btnSubmit.innerText = "Идет отправка...";
            btnSubmit.disabled = true;
            await postFormData();

            resetState();
        }
    }, 70);
};

const postFormData = async () => {
    const formData = {
        name: form.elements.name.value,
        email: form.elements.email.value
    };

    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Posted Form Data", formData);
};

const resetState = () => {
    form.reset();
    ConsultationFormValidator.clearErrorsAll();

    btnSubmit.innerText = "Отправить";
    btnSubmit.disabled = false;
};
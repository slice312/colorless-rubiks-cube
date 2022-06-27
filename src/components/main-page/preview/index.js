import {ModalOrder} from "/src/components/modal-order";


export const renderPreview = () => {
    const btnOpen = document.getElementById("btn-discuss-issue");
    if (btnOpen)
        btnOpen.onclick = ModalOrder.openModal;
};
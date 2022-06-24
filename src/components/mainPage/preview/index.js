import {ModalOrder} from "/src/components/modalOrder";


export const renderPreview = () => {
    const btnOpen = document.getElementById("btn-discuss-issue");
    if (btnOpen)
        btnOpen.onclick = ModalOrder.openModal;
};
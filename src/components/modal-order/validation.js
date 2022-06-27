import {Rule, Validator} from "/src/service/validation";

const fields = Object.freeze({
    name: {
        elements: {
            input: document.getElementById("modal-order-input-name"),
            status: document.getElementById("modal-order-input-name-err")
        },
        rules: [Rule.required],
        errorText: ""
    },
    email: {
        elements: {
            input: document.getElementById("modal-order-input-email"),
            status: document.getElementById("modal-order-input-email-err")
        },
        rules: [Rule.required],
        errorText: ""
    },
    issueDescription: {
        elements: {
            input: document.getElementById("modal-order-text-issue"),
            status: document.getElementById("modal-order-text-issue-err")
        },
        rules: [Rule.required],
        errorText: ""
    }
});


export const ModalOrderValidator = new Validator(fields);

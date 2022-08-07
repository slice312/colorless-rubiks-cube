import {Rule, Validator} from "/src/service/validation";


const fields = Object.freeze({
    name: {
        elements: {
            input: document.getElementById("consultation-form-input-name"),
            status: document.getElementById("consultation-form-input-name-err")
        },
        rules: [Rule.required],
        errorText: ""
    },
    email: {
        elements: {
            input: document.getElementById("consultation-form-input-email"),
            status: document.getElementById("consultation-form-input-email-err")
        },
        rules: [Rule.required],
        errorText: ""
    }
});


export const ConsultationFormValidator = new Validator(fields);

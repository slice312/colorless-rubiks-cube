const Rule = Object.freeze({
    required: (value) => !value ? "поля обязательно*" : "",
});


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



const validateField = (fieldName) => {
    fields[fieldName].errorText = getErrorText(fieldName);
    renderError(fieldName);
};

const getErrorText = (fieldName) => {
    const rules = fields[fieldName].rules;
    const value = fields[fieldName].elements.input.value;

    let errorText = "";

    rules.some(rule => {
        errorText = rule(value);
        return errorText;
    });

    return errorText;
};

const renderError = (fieldName) => {
    const {status, input} = fields[fieldName].elements;
    const {errorText} = fields[fieldName];

    if (errorText)
        input.classList.add("modal-order__input_error");
    else
        input.classList.remove("modal-order__input_error");

    status.textContent = errorText;
};

const clearError = (fieldName) => {
    fields[fieldName].errorText = "";
    renderError(fieldName);
};


export const Validator = {
    validateAll: () => {
        Object.keys(fields).forEach(field => validateField(field));
        return Object.values(fields).every(field => !field.errorText);
    },

    clearErrorsAll: () => {
        Object.keys(fields).forEach(fieldName => clearError(fieldName));
    },

    setClearErrorsHandlers: () => {
        Object.keys(fields)
            .forEach(fieldName => {
                fields[fieldName].elements.input
                    .addEventListener("input", () => clearError(fieldName));
            });
    },
};
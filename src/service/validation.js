export const Rule = Object.freeze({
    required: (value) => !value ? "поля обязательно*" : "",
});


export class Validator {
    #fields;

    constructor(fields) {
        this.#fields = fields;
    }

    validateAll() {
        Object.keys(this.#fields).forEach(field => this.#validateField(field));
        return Object.values(this.#fields).every(field => !field.errorText);
    }

    clearErrorsAll() {
        Object.keys(this.#fields).forEach(fieldName => this.#clearError(fieldName));
    }

    setClearErrorsHandlers() {
        Object.keys(this.#fields)
            .forEach(fieldName => {
                this.#fields[fieldName].elements.input
                    .addEventListener("input", () => this.#clearError(fieldName));
            });
    }

    #validateField(fieldName) {
        this.#fields[fieldName].errorText = this.#getErrorText(fieldName);
        this.#renderError(fieldName);
    };

    #getErrorText(fieldName) {
        const rules = this.#fields[fieldName].rules;
        const value = this.#fields[fieldName].elements.input.value;

        let errorText = "";

        rules.some(rule => {
            errorText = rule(value);
            return errorText;
        });

        return errorText;
    };

    #renderError(fieldName) {
        const {status, input} = this.#fields[fieldName].elements;
        const {errorText} = this.#fields[fieldName];

        if (errorText)
            input.classList.add("input_error");
        else
            input.classList.remove("input_error");

        status.textContent = errorText;
    };

    #clearError(fieldName) {
        this.#fields[fieldName].errorText = "";
        this.#renderError(fieldName);
    };

}


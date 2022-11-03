/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/consultation-form/index.js":
/*!***************************************************!*\
  !*** ./src/components/consultation-form/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderConsultationForm": () => (/* binding */ renderConsultationForm)
/* harmony export */ });
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation */ "./src/components/consultation-form/validation.js");



const form = document.getElementById("consultation-form");
const btnSubmit = document.getElementById("consultation-form-btn-submit");


const renderConsultationForm = () => {
    if (form)
        form.onsubmit = onFormSubmit;
}


const onFormSubmit = (e) => {
    e.preventDefault(); // прервать перезагрузку страницы
    _validation__WEBPACK_IMPORTED_MODULE_0__.ConsultationFormValidator.clearErrorsAll();

    // таймаут для анимации мигания перед валидацией
    setTimeout(async () => {
        const isValid = _validation__WEBPACK_IMPORTED_MODULE_0__.ConsultationFormValidator.validateAll();
        _validation__WEBPACK_IMPORTED_MODULE_0__.ConsultationFormValidator.setClearErrorsHandlers();

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
    _validation__WEBPACK_IMPORTED_MODULE_0__.ConsultationFormValidator.clearErrorsAll();

    btnSubmit.innerText = "Отправить";
    btnSubmit.disabled = false;
};

/***/ }),

/***/ "./src/components/consultation-form/validation.js":
/*!********************************************************!*\
  !*** ./src/components/consultation-form/validation.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultationFormValidator": () => (/* binding */ ConsultationFormValidator)
/* harmony export */ });
/* harmony import */ var _src_service_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/service/validation */ "./src/service/validation.js");



const fields = Object.freeze({
    name: {
        elements: {
            input: document.getElementById("consultation-form-input-name"),
            status: document.getElementById("consultation-form-input-name-err")
        },
        rules: [_src_service_validation__WEBPACK_IMPORTED_MODULE_0__.Rule.required],
        errorText: ""
    },
    email: {
        elements: {
            input: document.getElementById("consultation-form-input-email"),
            status: document.getElementById("consultation-form-input-email-err")
        },
        rules: [_src_service_validation__WEBPACK_IMPORTED_MODULE_0__.Rule.required],
        errorText: ""
    }
});


const ConsultationFormValidator = new _src_service_validation__WEBPACK_IMPORTED_MODULE_0__.Validator(fields);


/***/ }),

/***/ "./src/components/header-nav/index.js":
/*!********************************************!*\
  !*** ./src/components/header-nav/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHeaderNav": () => (/* binding */ renderHeaderNav)
/* harmony export */ });
const toggleMenu = () => {
    const menu = document.getElementById("mobile-menu");
    const burgerBtn = document.querySelector('.burger');

    burgerBtn.classList.toggle("active");
    menu.classList.toggle("mobile-menu__active");
};

const renderHeaderNav = () => {
    const burgerBtn = document.getElementById("burger-btn");
    const closeBtn = document.getElementById("burger-close-btn");
    burgerBtn.onclick = toggleMenu;
    closeBtn.onclick = toggleMenu;
    setActiveNavLink();
};


const setActiveNavLink = () => {
    Array.from(document.querySelectorAll(".menu__link"))
        .filter(x => x.href === window.location.href)
        .forEach(x => x.classList.add("menu__link_active"));
};

/***/ }),

/***/ "./src/components/main-page/preview/index.js":
/*!***************************************************!*\
  !*** ./src/components/main-page/preview/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderPreview": () => (/* binding */ renderPreview)
/* harmony export */ });
/* harmony import */ var _src_components_modal_order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/components/modal-order */ "./src/components/modal-order/index.js");



const renderPreview = () => {
    const btnOpen = document.getElementById("btn-discuss-issue");
    if (btnOpen)
        btnOpen.onclick = _src_components_modal_order__WEBPACK_IMPORTED_MODULE_0__.ModalOrder.openModal;
};

/***/ }),

/***/ "./src/components/modal-order/index.js":
/*!*********************************************!*\
  !*** ./src/components/modal-order/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalOrder": () => (/* binding */ ModalOrder)
/* harmony export */ });
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation */ "./src/components/modal-order/validation.js");



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
    _validation__WEBPACK_IMPORTED_MODULE_0__.ModalOrderValidator.clearErrorsAll();

    labelSuccess.style.visibility = "hidden";
    btnSubmit.innerText = "Отправить";
    btnSubmit.disabled = false;
};

const onFormSubmit = (e) => {
    e.preventDefault(); // прервать перезагрузку страницы
    _validation__WEBPACK_IMPORTED_MODULE_0__.ModalOrderValidator.clearErrorsAll();

    // таймаут для анимации мигания перед валидацией
    setTimeout(async () => {
        const isValid = _validation__WEBPACK_IMPORTED_MODULE_0__.ModalOrderValidator.validateAll();
        _validation__WEBPACK_IMPORTED_MODULE_0__.ModalOrderValidator.setClearErrorsHandlers();

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


const ModalOrder = {
    openModal,
    closeModal,
    render
}

/***/ }),

/***/ "./src/components/modal-order/validation.js":
/*!**************************************************!*\
  !*** ./src/components/modal-order/validation.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalOrderValidator": () => (/* binding */ ModalOrderValidator)
/* harmony export */ });
/* harmony import */ var _src_service_validation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/service/validation */ "./src/service/validation.js");


const fields = Object.freeze({
    name: {
        elements: {
            input: document.getElementById("modal-order-input-name"),
            status: document.getElementById("modal-order-input-name-err")
        },
        rules: [_src_service_validation__WEBPACK_IMPORTED_MODULE_0__.Rule.required],
        errorText: ""
    },
    email: {
        elements: {
            input: document.getElementById("modal-order-input-email"),
            status: document.getElementById("modal-order-input-email-err")
        },
        rules: [_src_service_validation__WEBPACK_IMPORTED_MODULE_0__.Rule.required],
        errorText: ""
    },
    issueDescription: {
        elements: {
            input: document.getElementById("modal-order-text-issue"),
            status: document.getElementById("modal-order-text-issue-err")
        },
        rules: [_src_service_validation__WEBPACK_IMPORTED_MODULE_0__.Rule.required],
        errorText: ""
    }
});


const ModalOrderValidator = new _src_service_validation__WEBPACK_IMPORTED_MODULE_0__.Validator(fields);


/***/ }),

/***/ "./src/service/validation.js":
/*!***********************************!*\
  !*** ./src/service/validation.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rule": () => (/* binding */ Rule),
/* harmony export */   "Validator": () => (/* binding */ Validator)
/* harmony export */ });
const Rule = Object.freeze({
    required: (value) => !value ? "поля обязательно*" : "",
});


class Validator {
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



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _components_header_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header-nav */ "./src/components/header-nav/index.js");
/* harmony import */ var _components_main_page_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main-page/preview */ "./src/components/main-page/preview/index.js");
/* harmony import */ var _components_consultation_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/consultation-form */ "./src/components/consultation-form/index.js");
/* harmony import */ var _components_modal_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/modal-order */ "./src/components/modal-order/index.js");








const render = () => {
    (0,_components_header_nav__WEBPACK_IMPORTED_MODULE_1__.renderHeaderNav)();
    (0,_components_main_page_preview__WEBPACK_IMPORTED_MODULE_2__.renderPreview)();
    (0,_components_consultation_form__WEBPACK_IMPORTED_MODULE_3__.renderConsultationForm)();

    const btnTrainingItemMore = document.getElementById("btn-training-item-more");
    if (btnTrainingItemMore) {
        btnTrainingItemMore.onclick = () => {
            window.location.href = "./training.html";
        }
    }

    _components_modal_order__WEBPACK_IMPORTED_MODULE_4__.ModalOrder.render();
};


document.addEventListener("DOMContentLoaded", render);


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map
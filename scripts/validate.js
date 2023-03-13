const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input-error',
    errorClass: 'popup__error_visible',
};

const showError = (form, input, obj, error) => {
    const errorElement = form.querySelector(`.${input.id}-error`);
    errorElement.classList.add(obj.errorClass);
    errorElement.textContent = error;
    input.classList.add(obj.inputErrorClass);
};

const hideError = (form, input, obj) => {
    const errorElement = form.querySelector(`.${input.id}-error`);
    errorElement.classList.remove(obj.errorClass);
    errorElement.textContent = '';
    input.classList.remove(obj.inputErrorClass);
};

const checkInputValidity = (form, input, obj) => {
    if (!input.validity.valid) {
        showError(form, input, obj);
    } else {
        hideError(form, input, obj);
    }
};

const setEventListeners = (formElement, obj) => {
    const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
    inputList.forEach((input) => {
        input.addEventListener('input', function() {
            checkInputValidity(formElement, input, obj);
            toggleButtonState(inputList, buttonElement, obj);
        });
    });
};

const enableValidation = (obj) => {
    const formList = Array.from(document.querySelectorAll(obj.formSelector));
    formList.forEach((form) => {
      setEventListeners(form, obj);
    });
};

enableValidation(obj);

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
};

function toggleButtonState(inputList, buttonElement, obj) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(obj.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(obj.inactiveButtonClass);
  }
};
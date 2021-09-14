import {handleFormSubmit, } from './index.js';
import {valid, } from './card';
//форма валидации
export function enableValidation() {
  const form = document.querySelector('.popup__input');
  form.addEventListener('submit', handleFormSubmit);
  form.addEventListener('input', handleFormInput);

  const formCard = document.querySelector('.popup__input_card');
  formCard.addEventListener('submit', handleFormSubmit);
  formCard.addEventListener('input', handleFormInput);
}

/* setbutton(button, false)

function setbutton(button, isValid) {
  button.disabled = !isValid;
}

function setSubmit(form) {
  const x = [...form.elements].reduce((acc, el) =>  setSubmitButtonState(el) && acc, true);
  setbutton(button, x);
}

form.addEventListener('input', () => setSubmit(form)); */

export function handleFormInput (event) {
  const input = event.target;
  const form = event.currentTarget;

  setCustomError(input);
  setFieldError(input)
  /* setSubmitButtonState(form) */
  toggleButtonState(form)
}


/*Функция простой проверки на валидность хотя бы одного поля формы*/
const hasInvalidInput = (inputs) => {
  return inputs.some((input) => {
    return !input.validity.valid
  });
}
const toggleButtonState = (inputList, button, valid) => {
  if (hasInvalidInput(inputList)) {
    button.classList.add(valid.inActiveButtonClass);
    button.disabled = true;
  } else {
      button.classList.remove(valid.inActiveButtonClass);
      button.disabled = false;
  }
}




// Найдём невалидные поля и установим ис тексты ошибок
export function setCustomError(input) {
  const validity = input.validity;
  input.setCustomValidity("");

}
// Показываем тексты ошибок пользователям
export function setFieldError(input) {
  const span = document.querySelector(`#error__${input.id}`);
  span.textContent = input.validationMessage;
}
// Активируем или деактивируем кнопку
/* export function setSubmitButtonState(form) {

  const button = form.querySelector('.popup__button-save');
  const isValid = form.checkValidity();

if (isValid) {
  button.classList.add('popup__button-save_disabled');
  button.classList.remove('popup__button-save_active');
  button.removeAttribute('disabled');
} else {
  button.classList.add('popup__button-save_active');
  button.classList.remove('popup__button-save_disabled');
  button.setAttribute('disabled', 'disabled');
  reset(button);
  }
}; */

/* const setEventListeners = (formElement, valid) => {
  const inputList = Array.from(formElement.querySelectorAll(valid.inputSelector));
  const buttonSubmit = formElement.querySelector(valid.submitButtonSelector);
  toggleButtonState(inputList, buttonSubmit, valid);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, valid);
      toggleButtonState(inputList, buttonSubmit, valid);
    })
  })

} */

enableValidation(valid);

//Сброс красной линии при невалидных данных
/* function resetInputErr(popup) {
  const inputList = Array.from(popup.querySelectorAll('.popup__item'));
  inputList.forEach((input) => {
      input.classList.remove('popup__item_error');
  })
} */

//Сброс сообщения о невалидности значения ввода
/* function resetSpanErr(popup) {
  const errorElementList = popup.querySelectorAll('.popup__error');
  errorElementList.forEach((errorElement)=> {
      errorElement.classList.remove('popup__item_error');
      errorElement.textContent = "";
  })
} */

//Сброс ошибок валидации форм
/* export function resetValidation(popup) {
  resetSpanErr(popup)
  resetInputErr(popup)
} */

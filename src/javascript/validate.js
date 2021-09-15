import {handleFormSubmit, } from './index.js';
import {valid, } from './card';
//форма валидации
export function enableValidation() {
  const form = document.querySelector(valid.formSelector);
  form.addEventListener('submit', handleFormSubmit);
  form.addEventListener('input', handleFormInput);

  const formCard = document.querySelector(valid.formSelectorCard);
  formCard.addEventListener('submit', handleFormSubmit);
  formCard.addEventListener('input', handleFormInput);

}

export function handleFormInput (event) {
  const input = event.target;
  const form = event.currentTarget;


  setCustomError(input);
  setFieldError(input);
  setSubmitButtonState(form)
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
export function setSubmitButtonState(form) {

  const button = form.querySelector(valid.submitButtonSelector);
  const isValid = form.checkValidity();

if (isValid) {
  button.classList.add(valid.inActiveButtonClass);
  button.classList.remove(valid.errorClass);
  button.removeAttribute('disabled');
} else {
  button.classList.add(valid.errorClass);
  button.classList.remove(valid.inActiveButtonClass);
  button.setAttribute('disabled', 'disabled');
  }
};

enableValidation(valid);

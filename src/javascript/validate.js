import {handleFormSubmit, } from './index.js';
//форма валидации
export function enableValidation() {
  const form = document.querySelector('.popup__input');
  form.addEventListener('submit', handleFormSubmit);
  form.addEventListener('input', handleFormInput);

  const formCard = document.querySelector('.popup__input_card');
  formCard.addEventListener('submit', handleFormSubmit);
  formCard.addEventListener('input', handleFormInput);
}

export function handleFormInput (event) {
  const input = event.target;
  const form = event.currentTarget;

  setCustomError(input);
  setFieldError(input)
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
  }
}



/* enableValidation(); */

// все настройки передаются при вызове
enableValidation({
  formSelector: '.popup__input',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__item_error',
  errorClass: 'popup__button-save_active'

});

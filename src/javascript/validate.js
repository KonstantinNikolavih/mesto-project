import { valid, } from './utils';

//форма валидации
export function enableValidation(valid) {
  const form = document.querySelector(valid.formSelector);
  form.addEventListener('input', handleFormInput);

  const formCard = document.querySelector(valid.formSelectorCard);
  formCard.addEventListener('input', handleFormInput);
}

function handleFormInput(event) {
  const input = event.target;
  const form = event.currentTarget;


  setCustomError(input);
  setFieldError(input);
  setSubmitButtonState(form)
}

// Найдём невалидные поля и установим ис тексты ошибок
export function setCustomError(input) {
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
    button.classList.remove(valid.inActiveButtonClass);
    button.removeAttribute('disabled');
  } else {
    button.classList.add(valid.inActiveButtonClass);
    button.setAttribute('disabled', 'disabled');
  }
};

export function disableButton(form, submitButtonSelector, inActiveButtonClass) {
  const button = form.querySelector(submitButtonSelector);
  button.classList.add(inActiveButtonClass);
  button.setAttribute('disabled', 'disabled')
};

enableValidation(valid);

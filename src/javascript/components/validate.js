export function enableValidation(valid) {
  const forms = document.querySelectorAll(valid.formSelector);
  forms.forEach((form) => {
    form.addEventListener('input', (evt) => handleFormInput(evt, valid));
 })
}

function handleFormInput(event, valid) {
  const input = event.target;
  const form = event.currentTarget;

  setCustomError(input, valid);
  setFieldError(input, valid);
  setSubmitButtonState(form, valid);
}

// Найдём невалидные поля и установим ис тексты ошибок
export function setCustomError(input, valid) {
  input.setCustomValidity("");
}

// Показываем тексты ошибок пользователям
export function setFieldError(input) {
  const span = document.querySelector(`#error__${input.id}`);
  span.textContent = input.validationMessage;
}
// Активируем или деактивируем кнопку
export function setSubmitButtonState(form, valid) {

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

export function disableButton(form, submitButtonSelector, inActiveButtonClass, valid) {
  const button = form.querySelector(submitButtonSelector);
  button.classList.add(inActiveButtonClass);
  button.setAttribute('disabled', 'disabled')
};

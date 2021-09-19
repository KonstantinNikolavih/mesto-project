// index.js
import '../page/index.css'; // добавьте импорт главного файла стилей

import { openPopupCard, popupCard, closePopupCard, elementList, popupCardImg, closePopupCardImg, initialCards, } from './utils.js';
import { openPopup, closePopup } from './modal.js';
import { parametrCard, renderCards } from './card'
import { disableButton, enableValidation, } from './validate.js';
import { profileSubmit } from './profile';

// открытие popup 2
openPopupCard.addEventListener('click', function () {
  openPopup(popupCard)
})
// закрытие popup 2
closePopupCard.addEventListener('click', function () {
  closePopup(popupCard)
})

// закрытие 3 popup
closePopupCardImg.addEventListener('click', function () {
  closePopup(popupCardImg)
})

// все настройки передаются при вызове
export const valid = {
  formSelector: '.popup__input',
  formSelectorCard: '.popup__input_card',
  inputSelector: '.popup__item',
  inputErrorClass: '.popup__item_error',
  submitButtonSelector: '.popup__button-save',
  inActiveButtonClass: 'popup__button-save_disabled',
  errorClass: '.popup__button-save_active',
};

enableValidation(valid);

// вызов массива
renderCards(initialCards);

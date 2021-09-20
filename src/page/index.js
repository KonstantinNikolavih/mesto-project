// index.js
import './index.css'; // добавьте импорт главного файла стилей

import { openPopupCard, popupCard, closePopupCard, elementList, popupCardImg, closePopupCardImg, initialCards, } from '../javascript/components/utils';
import { openPopup, closePopup } from '../javascript/components/modal.js';
import { parametrCard, renderCards, } from '../javascript/components/card';
import { disableButton, enableValidation } from '../javascript/components/validate.js';
import { profileSubmit } from '../javascript/components/profile';
import { valid } from '../javascript/utils/peremen'

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

enableValidation(valid);

// вызов массива
renderCards(initialCards);

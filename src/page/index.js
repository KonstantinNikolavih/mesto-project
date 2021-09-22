// index.js
import './index.css'; // добавьте импорт главного файла стилей

import { popupItemAvatar, profileAvatar, popupAvatarInput, openPopupCard, popupAvatar, popupEditAvatar, popupEditAvatarClose, popupCard, closePopupCard, elementList, popupCardImg, closePopupCardImg, initialCards, } from '../javascript/components/utils';
import { openPopup, closePopup } from '../javascript/components/modal.js';
import { parametrCard, renderCards, } from '../javascript/components/card';
import { disableButton, enableValidation } from '../javascript/components/validate.js';
import { profileSubmit } from '../javascript/components/profile';
import { valid } from '../javascript/utils/peremen';

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

// открытие аватарки
popupEditAvatar.addEventListener('click', function () {
  openPopup(popupAvatar)
})

//закрытие popup
/* popupEditAvatarClose.addEventListener('click', function () {
  closePopup(popupAvatar)
}) */

// fuction имя функции (параметры) {инструкции}
export function avatarSubmit(evt) {
  evt.preventDefault();
  // соединяем popup c section avatar для созранения изменений
  profileAvatar.src = popupItemAvatar.src;
    // закрытие формы после сохранения изменений
  closePopup(popupAvatar);
  popupAvatarInput.reset();
}
//обробочик
popupAvatarInput.addEventListener('submit', avatarSubmit);

enableValidation(valid);

// вызов массива
renderCards(initialCards);

// запрос на сервер
/* .then */

//ошибка при не удачной попытки
/* .catch */


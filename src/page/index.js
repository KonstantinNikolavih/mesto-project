// index.js
import './index.css'; // добавьте импорт главного файла стилей

import {
  popupItemAvatar,
  profileAvatar,
  popupAvatarInput,
  openPopupCard,
  popupAvatar,
  popupEditAvatar,
  popupEditAvatarClose,
  popupCard,
  closePopupCard,
  elementList,
  popupCardImg,
  closePopupCardImg,
  initialCards,
} from '../javascript/components/utils';
import {openPopup, closePopup} from '../javascript/components/modal.js';
import {init as initCardsList} from '../javascript/components/card';
import {enableValidation} from '../javascript/components/validate.js';
import {profileSubmit} from '../javascript/components/profile';
import {valid} from '../javascript/utils/peremen';
import {getProfil} from '../javascript/components/api.js';
import {init as initProfile} from "../javascript/components/profile";
import {init as initAvatar, avatarSubmit} from "../javascript/components/avatar";

window.onload = function () {
  getProfil()
    .then((user) => {
      initAvatar(user);
      initProfile(user);
      initCardsList(user);
    })
    .catch((err) => {
      console.log(err);
  })
}

// api
// import { getCard, getProfil, } from '../javascript/components/api';

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
//обробочик
popupAvatarInput.addEventListener('submit', avatarSubmit);

popupEditAvatarClose.addEventListener('click', function () {
  closePopup(popupAvatar)
})

//закрытие popup
  /* popupEditAvatarClose.addEventListener('click', function () {
    closePopup(popupAvatar)
  }) */

  enableValidation(valid)

// вызов массива
// renderCards(initialCards);

// запрос на сервер
/* .then */

//ошибка при не удачной попытки
/* .catch */

// // Промикс
// Promise.all([getCard(), getProfil()])
// // оброботка на сервере
// .then()

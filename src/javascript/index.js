// index.js
import '../page/index.css'; // добавьте импорт главного файла стилей

import {initialCards, valid, popupPofile, popupEditProfile, popupEditProfileClose, formElement, profileNameElement, profileJobElement, nameInput, jobInput, save, openPopupCard, popupCard, closePopupCard, elementList, popupCardImg, closePopupCardImg, popupInputCard, popupItemCardName, popupItemCardJob, } from './utils.js';
import {openPopup, closePopup} from './modal.js'; 
import {parametrCard,} from './card.js'; 
/* import {initialCards, valid, popupPofile, popupEditProfile, popupEditProfileClose, formElement, profileNameElement, profileJobElement, nameInput, jobInput, save, openPopupCard, popupCard, closePopupCard, elementList, openPopupCardImg, popupCardImg, closePopupCardImg, elementsTitleCard, popupInputCard, popupItemCardName, popupItemCardJob, photoTemplat, cardElement, elementsImg, elementsTitl, elementsGroup, elementsDele,} from './utils.js';
import {openPopup, closePopup} from './modal.js'; 
import {parametrCard,} from './card.js';  */
/* import {setSubmitButtonState, enableValidationd, setFieldError, setCustomError, disableButton, handleFormInput, enableValidation, } from './validate.js';  */
import { disableButton, enableValidation, } from './validate.js'; 


 // открытие
popupEditProfile.addEventListener('click', function() {
   openPopup(popupPofile)
 })

// закрытие
popupEditProfileClose.addEventListener('click', function() {
  closePopup(popupPofile)
})


// закрытие формы после сохранения изменений
save.addEventListener('click', function() {
  closePopup(popupPofile)
})
// fuction имя функции (параметры) {инструкции}
function formProfil (evt) {
  evt.preventDefault();
  // соединяем popup c section profil для созранения изменений
  profileNameElement.textContent = nameInput.value;
  profileJobElement.textContent = jobInput.value;
  /* formElement.reset() */
}
  formElement.addEventListener('submit', formProfil);

// закрытие popup за границей контейнера
// наложить слушитель addEventListener
popupPofile.addEventListener('click', function() {
  document.addEventListener('click', closePopupZon);
});
function closePopupZon (event) {
  if(event.target.classList.contains('popup')) {
     closePopup(event.target);
  }
};

//function кнопки esc
export function closePopupEsc (evt) {
  if(evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
};

// открытие popup 2
openPopupCard.addEventListener('click', function() {
  openPopup(popupCard)
})
// закрытие popup 2
closePopupCard.addEventListener('click', function() {
  closePopup(popupCard)
})

// закрытие 3 popup
closePopupCardImg.addEventListener('click', function() {
  closePopup(popupCardImg)
})

function addCards(cardLos) {
  const card = parametrCard(cardLos);
  elementList.prepend(card);
}

// form для добавления карты и сброс карты и закрытие popup
popupInputCard.addEventListener('submit', function (evt) {

  evt.preventDefault()
  addCards({
  name: popupItemCardName.value,
  link: popupItemCardJob.value
})

  popupInputCard.reset();
  closePopup(popupCard)
  disableButton(popupInputCard, '.popup__button-save', 'popup__button-save_disabled')
});

// добовления карточек из массива
const arrayCards = function() {
  initialCards.forEach (card => addCards(card))
}
// вызов из массива
arrayCards();

enableValidation(valid);


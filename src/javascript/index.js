// index.js
import '../page/index.css'; // добавьте импорт главного файла стилей

import {popupPofile, popupEditProfile, popupEditProfileClose, popup, formElement, profileNameElement, profileJobElement, nameInput, jobInput, save, openPopupCard, popupCard, closePopupCard, elementList, openPopupCardImg, popupCardImg, closePopupCardImg, elementsTitleCard, popupInputCard, popupItemCardName, popupItemCardJob, photoTemplat, cardElement, elementsImg, elementsTitl, elementsGroup, elementsDele,} from './utils';
import {openPopup, closePopup} from './modal';

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

// закрытие popup на кнопку esc
popupPofile.addEventListener("click", function() {
  document.addEventListener('keydown', closePopupEsc);
});
function closePopupEsc (evt) {
  if(evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
    closePopup();
  }
};

//обробочик add popup на кнопку esc
  const addClosePopupEsc = ("click", function () {
    document.addEventListener('keydown', closePopupEsc);
  });

//обробочик remove popup на кнопку esc
  const removeClosePopupEsc = ("click", function () {
    document.addEventListener('keydown', closePopupEsc);
  });

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

// добовление перемены с карточкими
/* const popupInputCard = document.querySelector('.popup__input_card');
const popupItemCardName = document.querySelector('.popup__item-card-name');
const popupItemCardJob = document.querySelector('.popup__item-card-occupation'); */
// обшие переменые для функции добовления карточки
  function parametrCard(card) {
// template карточки
const photoTemplat = document.querySelector('.item_template').content;
const cardElement = photoTemplat.querySelector('.elements__item').cloneNode(true);
const elementsImg = cardElement.querySelector('.elements__img');
const elementsTitl = cardElement.querySelector('.elements__title');
const elementsGroup = cardElement.querySelector('.elements__group');
const elementsDele = cardElement.querySelector('.elements__dele');


  elementsImg.setAttribute('src', card.link);
  elementsImg.setAttribute('alt', card.name);
  elementsTitl.textContent = card.name;

// соединяем функции popup card и template // открытие card img
elementsImg.addEventListener('click', function() {
  openPopupCardImg.src = elementsImg.src
  openPopupCardImg.alt = elementsTitl.textContent
  elementsTitleCard.textContent = elementsTitl.textContent
  openPopup(popupCardImg)
});

//обработчик функции лайка Card
elementsGroup.addEventListener("click", function (evt) {
  const likeCardListeners = evt.target;
  likeCardListeners.classList.toggle('elements__group_active');
});

// удаление карточек
  elementsDele.addEventListener("click", function () {
  const deleteCardListeners = elementsDele.closest('.elements__item');
  deleteCardListeners.remove();
});

return cardElement
}
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

  popupInputCard.reset()
  closePopup(popupCard)
});
// добовления карточек из массива
const arrayCards = function() {
  initialCards.forEach (card => addCards(card))
}
// вызов из массива
arrayCards()



import { initialCards } from './card.js';
/* import { } from './modal.js'; */
import {} from './validate.js';

import { popupInputCard, popupItemCardName, popupItemCardJob, openPopupCardImg, elementsTitleCard, popupCardImg,} from './utils.js';
import { openPopup, closePopup, } from './modal.js';
import {initialCards,} from './initialCards.js';
import {} from './index.js';
// добовление перемены с карточкими
/* const popupInputCard = document.querySelector('.popup__input_card');
const popupItemCardName = document.querySelector('.popup__item-card-name');
const popupItemCardJob = document.querySelector('.popup__item-card-occupation'); */
// обшие переменые для функции добовления карточки
export function parametrCard(card) {
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
};



// все настройки передаются при вызове
export const valid = {
  formSelector:'.popup__input',
  inputSelector:'.popup__item',
  inputErrorClass: '.popup__item_error',
  submitButtonSelector: '.popup__button-save',
  inActiveButtonClass: 'popup__button-save_disabled',
  errorClass: '.popup__button-save_active',
};

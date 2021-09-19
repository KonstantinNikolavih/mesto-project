import { openPopupCardImg, elementsTitleCard, popupCardImg, initialCards, elementList, popupInputCard, popupItemCardName, popupItemCardJob, popupCard, } from './utils';
import { openPopup, closePopup, } from './modal.js';
import { disableButton } from './validate';
import { valid, } from './index'

// обшие переменые для функции добовления карточи
export function createCard(card) {
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
  elementsImg.addEventListener('click', function () {
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

export function addCards(cardLos) {
  const card = createCard(cardLos);
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
  disableButton(popupInputCard, valid.submitButtonSelector, valid.inActiveButtonClass)
});

// добовления карточек из массива
export function renderCards(cards) {
  cards.forEach(item => {
    addCards(item, elementList);
  });
}

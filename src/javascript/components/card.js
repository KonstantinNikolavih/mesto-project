import {
  openPopupCardImg,
  elementsTitleCard,
  popupCardImg,
  initialCards,
  elementList,
  popupInputCard,
  popupItemCardName,
  popupItemCardPlace,
  popupCard,
} from '../components/utils';
import {openPopup, closePopup,} from '../components/modal';
import {disableButton} from '../components/validate';
import {valid,} from '../../javascript/utils/peremen';
import {getCard, addNewCard, deleteCard, putLike, deleteLike} from "./api";
import {setSubmitButtonStatus} from "./utils";

let userData;

const buttonSaveCard = popupCard.querySelector('.popup__button-save-card');

export function init(user) {
  userData = user;
  getCard()
    .then((cardArray) => {
      cardArray.reverse();
      cardArray.forEach(card => {
        addCards(card, user, elementList)
      })
    })
    .catch((err) => {
      console.log(err);
    })
}

// обшие переменые для функции добовления карточи
export function createCard(card, user) {
  // template карточки
  const photoTemplat = document.querySelector('.item_template').content;
  const cardElement = photoTemplat.querySelector('.elements__item').cloneNode(true);
  const elementsImg = cardElement.querySelector('.elements__img');
  const elementsTitl = cardElement.querySelector('.elements__title');
  const elementsGroup = cardElement.querySelector('.elements__group');
  const elementsDele = cardElement.querySelector('.elements__dele');
  const elementsLike = cardElement.querySelector('.elements__group_nem');

  elementsImg.setAttribute('src', card.link);
  elementsImg.setAttribute('alt', card.name);
  elementsTitl.textContent = card.name;
  // отображение кол-ва лайков для каждой карточки
  elementsLike.textContent = card.likes.length;
  if (card.likes.some(like => like._id === user._id)) {
    elementsGroup.classList.add('elements__group_active');
  }
  // соединяем функции popup card и template // открытие card img
  elementsImg.addEventListener('click', function () {
    openPopupCardImg.src = elementsImg.src
    openPopupCardImg.alt = elementsTitl.textContent
    elementsTitleCard.textContent = elementsTitl.textContent
    openPopup(popupCardImg)
  });

  // удаление иконки карзины с карточки, если она добавлена не мной. Иначе добавляем ей листенер и запрос на сервер об удалении карточки
  if (card.owner._id !== user._id) {
    elementsDele.remove();
  } else {
    elementsDele.addEventListener("click", function () {
      // удаление карточек
      deleteCard(card._id)
        // для запросов DELETE ответ - это просто статус запроса, напр., 200OK. Json не возвращается
        .then((res) => {
          const deleteCardListeners = elementsDele.closest('.elements__item');
          deleteCardListeners.remove();
        })
        .catch((err) => {
          console.log(err);
        })
    })
  }

  //обработчик функции лайка Card
  elementsGroup.addEventListener("click", function (evt) {
    const likeCardListeners = evt.target;
    if (!card.likes.some(like => like._id === user._id)) {
      putLike(card._id)
        .then((resCardLike) => {
          card.likes = resCardLike.likes;
          likeCardListeners.classList.add('elements__group_active');
          elementsLike.textContent = resCardLike.likes.length;
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        })
    }
    else {
      deleteLike(card._id)
        .then((resCardLike) => {
          card.likes = resCardLike.likes;
          likeCardListeners.classList.remove('elements__group_active');
          elementsLike.textContent = resCardLike.likes.length;
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}`);
        })
    }
  });

  return cardElement
}

export function addCards(cardLos, user, elementList) {
  const card = createCard(cardLos, user);
  elementList.prepend(card);
}

// form для добавления карты и сброс карты и закрытие popup
popupInputCard.addEventListener('submit', function (evt) {
  evt.preventDefault()
  setSubmitButtonStatus(buttonSaveCard, true);
  addNewCard(popupItemCardName.value, popupItemCardPlace.value)
    .then((res) => {
      addCards(res, userData, elementList)
      popupInputCard.reset();
      disableButton(popupInputCard, valid.submitButtonSelector, valid.inActiveButtonClass)
      closePopup(popupCard)
    })
    .catch((err) => {
      console.log(`Ошибка: ${err}`);
    })
    .finally(() => {
      setSubmitButtonStatus(buttonSaveCard, false);
    })
});

// старый способ добавления карточек
// // добовления карточек из массива
// export function renderCards(cards) {
//   cards.forEach(item => {
//     addCards(item, elementList);
//   });
// }

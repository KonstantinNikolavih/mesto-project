const initialCards = [
  {
    name: 'Карачаевск',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Гора Эльбрус',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Домбай',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Карачаево-Черкасово',
    link: ''
  },
  {
    name: 'Рунетка',
    link: ''
  }
];



// 1 popup profile

const openPopup = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');

// всплывающее окго
/* const pop = document.querySelector('.popup_opened-spl');
openPopup.addEventListener('click', function() {
  pop.classList.add('profile__button-edit');
  console.log('pop');
})*/

// переменная.команда(событие) функция перехвата команды
 openPopup.addEventListener('click', function() {
    popup.classList.add('popup_opened');
})
// 2 вареант открытия // имя функции и {инструкции}
/* function openPopup(item) {
  item.classList.add('popup_opened');
}*/
// вызов функции // (параметры)
/* openPopup() */

closePopup.addEventListener('click', function() {
    popup.classList.remove('popup_opened');
})


// закрытие popup за границей контейнера
// наложить слушитель addEventListener
popup.addEventListener('click', function(event) {
  if (event.target === event.currentTarget) {
    popup.classList.toggle('popup_opened');
  }
 })




//добовление карточек

/* initialCards.reverse().forEach(addInitialCards);
/* }) */
/*
function addInitialCards(element) {
  addCards(createCard(element.name, element.link));

}*/
//


//тест формы для сохрпанения
const formElement = document.querySelector('.popup__input');

const nameInput = document.querySelector('.profile__name');
const jobInput = document.querySelector('.profile__occupation');
const nameInpu = document.querySelector('.popup__item_name');
const jobInpu = document.querySelector('.popup__item_occupation');
// сохранение редактированого профиля

const save = document.querySelector('.popup__button-save');

save.addEventListener('click', function() {
  formElement.classList.remove('popup__button-save');
})


function formSubmitHandler (evt) {
  evt.preventDefault();
  nameInput.textContent = nameInpu.value;
  jobInput.textContent = jobInpu.value;

  popup.classList.toggle('popup_opened');

}
  formElement.addEventListener('submit', formSubmitHandler);



  // 2 popup добавление карточки

const openPopupCard = document.querySelector('.profile__button-add');
const popupCard = document.querySelector('.popup-card-nov');
const closePopupCard = document.querySelector('.popup__close-card-nov');


 openPopupCard.addEventListener('click', function() {
    popupCard.classList.add('nav_card');
})

closePopupCard.addEventListener('click', function() {
    popupCard.classList.remove('nav_card');
})


popupCard.addEventListener('click', function(event) {
  if (event.target === event.currentTarget) {
    popupCard.classList.toggle('nav_card');
  }

})



const photoTemplate = document.querySelector('.item_template').content;
const photoList = document.querySelector('.elements__list');


//добовления масива
function addCards(card) {
  photoList.prepend(card);
}



initialCards.reverse().forEach(addInitialCards);
function addInitialCards(element) {
  addCards(createCard(element.name, element.link));

}
function createCard(title, image){
// переменые для card template
const elementImg = photoTemplate.querySelector('.elements__item').cloneNode(true);
const cardImage = photoTemplate.querySelector('.elements__img');
const elementsTitle = elementImg.querySelector('.elements__title');

elementImg.textContent = title;
elementImg.src = image;
elementsTitle.title = title;

  /* deletePhotoListeners(elementImg);
  likePhotoListeners(elementImg); */
  /* openPopupCardsListeners(elementImg); */
  return elementImg;
};

/* const elementsImg = document.querySelector('.elements__img'); */


// 1 вареант
// добовление переменых для текста и картинки
const nameCard = document.querySelector('.popup__item-card-name');
const occupationCard = document.querySelector('.popup__item-card-occupation');

// добовление переменых для новых карточек текста и картинок
const elementsImgCard = document.querySelector('.elements__img_card');
const elementsTitleCard = document.querySelector('.elements__title_card');

// добовление текста для создания карточки



// Сохранения новой карточки
const saveCard = document.querySelector('.popup__button-save-card');
// тест функции и переменой при вызове в параметрах
const popupCardWidth = document.querySelector('.popup__card_width');

saveCard.addEventListener('click', function() {
  formElement.classList.remove('popup__button-save-card');
})
// form для добавления карты и сброс карты и закрытие popup
/* popupInputCard.addEventListener('submit', function (evt) {
  evt.preventDefault()
  addCards({
    name: popupItemCardName.value,
    link: popupItemCardOccupation.value
  })
  popupInputCard.reset()
  openPopupCardImgl(popupCard)
}); */

//добовление карточки
/* function navCard() {
  openPopup(popupCard);
  cardImage.value = elementsTitleCard.textContent;
  cardImage.value = elementsImgCard.src;
} */

// 2 вареант
//Открытие popup с картинкой
 /* function openPopupCards(evt) {
  console.log(openPopupCards) */
 /*  cardImage.addEventListener('click', () => {
  elementsImgCard.src = evt.target.closest('.elements__img').src;
  elementsImgCard.alt = evt.target.closest('.elements__img').alt;
  elementsTitleCard.textContent = evt.target.closest('.elements__item').textContent;
  openPopupCards(popupCardWidth); */

/* }); */

// тест функции и переменой при вызове в параметрах
/*const popupCardWidth = document.querySelector('.popup__card_width');
// temlate вызываем
function openPopupCards(card, item) {
  card.querySelector('.elements__img').addEventListener('click', (card) => {
    openPopup(popupCardWidth);

  console.log(openPopupCards)
  elementsImgCard.src = item.link;
  elementsImgCard.alt = item.name;
  elementsTitleCard.textContent = item.name;
 /*  openPopupCards(); */


/*
function openPopupCardsListeners(element) {
  element.querySelector('.elements__img').addEventListener('click', openPopupCards);
}
// добовление из массива
function createCards() {
  initialCards.forEach(element => {
    prependCard(elements, addCards(element.name, element.link))
    })
  }
document.addEventListener('DOMContentLoaded', createCards()) */



// 3 вареант
// открытие popup с картинкой
/* const subtitle = document.querySelector(".popup__subtitle");
const popupCardWidth = document.querySelector('.popup__card_width');// карточка для большой фотографии

function openPopupCards(card, item) {
  card.querySelector(".elements__img").addEventListener("click", (card) => {
    openPopup(popupCardWidth);



    cardImage.src = item.link;
    cardImage.alt = item.name;
    subtitle.textContent = item.name;

  });
}
 */


//удаление карточки версия 2
/* function deletePhoto(item) {
  item.querySelector('.elements__dele');
  item.addEventListener('click', (evt) => {
    evt.target.closest('.elements__item').remove();
  });

} */


//Функция удаления фотокарточки
function deletePhoto (evt) {
evt.target.closest('.elements__item').remove();
}
function deletePhotoListeners(element) {
  element.querySelector('.elements__dele').addEventListener('click', deletePhoto);
}


//лайк
function likePhoto (evt) {
  evt.target.classList.toggle('elements__group_active');
}
function likePhotoListeners(element) {
  element.querySelector('.elements__group').addEventListener('click', likePhoto);
}

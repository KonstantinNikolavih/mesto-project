
// карточки для добавления
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
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
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
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

closePopup.addEventListener('click', function() {
    popup.classList.remove('popup_opened');
})



popup.addEventListener('click', function(event) {
  if (event.target === event.currentTarget) {
    popup.classList.toggle('popup_opened');
  }

})

// добовляет класс эфект плавного появления popup
/* const popupm = document.querySelector('.popup_openedd');
openPopup.addEventListener('mouseout', function() {
  popupm.classList.toggle('popup_openedd'); */



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



//---


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

// добовление карточки
/* const listElement = document.querySelector('.elements__list');

const nameElements = document.querySelector('.elements__title');
const imgElements = document.querySelector('.elements__img');
const nameItem = document.querySelector('.popup__item-card-name');
const imgItem = document.querySelector('.popup__item-card-img');
// сохранение редактированого профиля

const saveCard = document.querySelector('.popup__button-save-card');

saveCard.addEventListener('click', function() {
  formElement.classList.remove('popup__button-save-card');
})



function formSubmitHandler (evt) {
  evt.preventDefault();
  nameElements.textContent = nameItem.value;
  imgElements.шьл = imgItem.add;

  popup.classList.toggle('nav_card');

}
  listElement.addEventListener('submit', formSubmitHandler);
 */

// 3 popup ccard картинки
const card = document.querySelector('.elements__img');
const openCard = document.querySelector('.elements__item');
const closeCard = document.querySelector('.popup__close-card');

openCard.addEventListener('click', function() {
  card.classList.add('popup_cards');
})
closeCard.addEventListener('click', function() {
  card.classList.remove('popup_cards');
});


// тестовый шаблон

 /*  function addSong(artistValue, titleValue) {
    const songTemplate = document.querySelector('#song-template').content;
    const songElement = songTemplate.querySelector('.song').cloneNode(true);*/

    groupElement.querySelector('.elements__group').textContent = artistValue;
    songElement.querySelector('.song__title').textContent = titleValue;

  // лайк картинки
groupElement.querySelector('.elements__group').addEventListener('click', function (evt) {
  evt.target.classList.toggle('elements__group_active');
  });


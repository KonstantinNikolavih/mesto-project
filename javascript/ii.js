/*
<!DOCTYPE html>
<html lang="ru"><head> <meta charset="UTF-8">
   <link rel="stylesheet" href="pages/index.css">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Место</title></head><body class="page"> <div class="root page__root">
      <header class="header"> <img src="images/logo.svg" alt="Mesto-Russia" class="header__logo">
      </header>
      <main class="content"> <section class="profile page__profile">
      <img src="images/jacques-yves-cousteau.jpg" alt="Жак-Ив Кусто́" class="profile__avatar">
         <div class="profile-info"> <h1 class="profile-info__title">Жак-Ив Кусто</h1>
          <button aria-label="edit" type="button" class="profile-info__button"></button>
          <p class="profile-info__subtitle">Исследователь океана</p> </div> <button aria-label="add" type="button" class="profile__button"></button>
          </section>
          <section class="elements"> <ul class="elements__list">
             </ul>
              </section>
             </main>
             <footer class="footer page__footer">
            <p class="footer__copyright"> &copy; 2021 Александр Савосько</>
            </footer>
             </div>
             <div class="popup">
                <div class="popup__container">
                <button aria-label="close" type="button" class="popup__close"></button>
                <form name="form" class="form edit-form">
                <h2 class="form__title">Редактировать профиль</h2>
                <label> <input class="form__item edit-name" type="text" name="name" value="Жак-Ив Кусто" required>
                </label>
                <label>
                  <input class="form__item edit-job" type="text" name="description" value="Исследователь океана" required>
   </label>
   <button class="form__button" type="submit">Сохранить</button>
   </form>
   </div>
    </div>
     <div class="popup popup-card">
      <div class="popup__container">
         <button aria-label="close" type="button" class="popup__close"></button>
         <form name="form" class="form card-form">
         <h2 class="form__title">Новое место</h2>
         <label> <input class="form__item card-name" type="text" name="name" value="Название" required>
         </label> <label> <input class="form__item card-image" type="text" name="description" value="Ссылка на картинку" required>
         </label> <button class="form__button" type="submit">Сохранить</button> </form>
         </div>
          </div>
          <div class="popup-gallery">
   <div class="popup-gallery__inner">
   <button type="button" class="popup-gallery__button"></button>
   <img src="" alt="" class="popup-gallery__image">
      <p class="popup-gallery__title"></p>
       </div>
       </div>
       <template id="element">
       <li class="element">
       <img class="element__icon" src="images/trash.svg" alt="Корзина">
          <img class="element__image">
             <h2 class="element__title"></h2>
 <button aria-label="like" type="button" class="element__button">
   </button> </li> </template> <script src="scripts/main.js">
     </script></body></html> */





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
// переменная.команда(событие) функция перехвата команды
openPopup.addEventListener('click', function() {
  popup.classList.add('popup_opened');
})
closePopup.addEventListener('click', function() {
  popup.classList.remove('popup_opened');
})
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







/* const popup = document.querySelector('.popup');
const popupCloseBtn = popup.querySelector('.popup__close');
const editProfileBtn = document.querySelector('.profile-info__button');
const editProfileJob = document.querySelector('.profile-info__subtitle');
const editProfileName = document.querySelector('.profile-info__title');
const formCardElement = document.querySelector('.card-form');
const formEditElement = document.querySelector('.edit-form');
const nameInput = formEditElement.querySelector('.edit-name');
const jobInput = formEditElement.querySelector('.edit-job');
const nameCardInput = formCardElement.querySelectorAll('.form__item')[0];
const ImageCardInput = formCardElement.querySelectorAll('.form__item')[1];
const elementsList = document.querySelector('.elements__list');
const popupCard = document.querySelector('.popup-card');
const addCardBtn = document.querySelector('.profile__button');
const popupCardCloseBtn = popupCard.querySelector('.popup__close');
const popupGallery = document.querySelector('.popup-gallery');
const popupGalleryCloseBtn = popupGallery.querySelector('.popup-gallery__button');
const popupGalleryTitle = popupGallery.querySelector('.popup-gallery__title');
const popupGalleryImage = popupGallery.querySelector('.popup-gallery__image'); */

      //Функция добавления класса для открытия  popup
/*  function openPopup(element) { element.classList.add('popup_opened');} */
  //Функция добавления класса для открытия Gallery
  /* function openGallery(element) { element.classList.add('popup-gallery_opened');} */
  //Функция удаления класса для закрытия Gallery
 /*  function closeGallery(element) { element.classList.remove('popup-gallery_opened');} */
  //Функция удаления класса для закрытия popup
  /* function closePopup(element) { element.classList.remove('popup_opened');} */
   //Открытие попап-формы путем нажатия на кнопку "Edit"
  /*  editProfileBtn.addEventListener('click', function () { openPopup(popup);}); */
    //Функция проверки наличия текста в полях, записи введенного текста в переменные, закрытия формы
    function formEditSubmitHandler(event) { event.preventDefault();
       if (nameInput.value && jobInput.value) { editProfileName.textContent = nameInput.value; editProfileJob.textContent = jobInput.value; closePopup(popup); }}
//Закрытие попап-формы по нажатию на кнопку "крестик"
popupCloseBtn.addEventListener('click', function () { closePopup(popup);});
 //Закрытие попап-формы по нажатию на пустое поле
 popup.addEventListener('click', (event) => { if (event.target === event.currentTarget) { closePopup(popup); }})
  //Закрытие попап-формы по нажатию на "Escape"
  window.onkeydown = function (event) { if (event.keyCode === 27) { closePopup(popup); }};
   //Слушатель события (нажатие на кнопку типа submit)
   formEditElement.addEventListener('submit', formEditSubmitHandler);
    //Открытие попап-формы путем нажатия на кнопку "Плюс"
    addCardBtn.addEventListener('click', function () { openPopup(popupCard);});
//Функция добавления нового элемента в начало
function addCard(cardElement, cardContainer) { const card = newCard(cardElement);


cardContainer.prepend(card);} //функция присвоения необходимых значений карточке, которая возвращает заполненную карточку + удаление карточки по иконке + открытие галереи по нажатию
function newCard(cardData) { const cardTemplate = document.querySelector('#element').content;
 const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
const cardTitle = cardElement.querySelector('.element__title');
 const cardImage = cardElement.querySelector('.element__image');
 const cardLike = cardElement.querySelector('.element__button');
const cardRemover = cardElement.querySelector('.element__icon');
cardTitle.textContent = cardData.name;
cardImage.src = cardData.link;
cardImage.alt = cardData.name;
cardImage.addEventListener('click', function () { popupGalleryImage.src = cardData.link; popupGalleryTitle.textContent = cardData.name; openGallery(popupGallery);
 })
  cardLike.addEventListener('click', function () { buttonLike(cardLike); }) cardRemover.addEventListener('click', function () { removeCart(cardElement);
   }) return cardElement;}
   //Закрытие Галереи по нажатию на кнопку "крестик"
   popupGalleryCloseBtn.addEventListener('click', function () { closeGallery(popupGallery);});
   //Закрытие Галереи по нажатию на "Escape"
   window.onkeydown = function (event) { if (event.keyCode === 27) { closeGallery(popupGallery); }};
  //Закрытие Галереи по нажатию на пустое поле
 popupGallery.addEventListener('click', (event) => { if (event.target === event.currentTarget) { closeGallery(popupGallery); }})
  //Функция добавления-удаления класса element__button_active кнопке лайка в зависимости от состояния
   function buttonLike(element) { element.classList.toggle('element__button_active');}
 //Перебор массива по порядку, добавление в DOM
 initialCards.forEach((item) => { addCard(item, elementsList);});
//Функция проверки наличия текста в полях, записи введенных значений, закрытия формы
function formCardSubmitHandler(event) { event.preventDefault();
   if (nameCardInput.value && ImageCardInput.value) { addCard({ name: nameCardInput.value, link: ImageCardInput.value }, elementsList) closePopup(popupCard); }}
 //Функция удаления элемента
 function removeCart(element) { element.remove();}
 //Закрытие попап-формы по нажатию на кнопку "крестик"
 popupCardCloseBtn.addEventListener('click', function () { closePopup(popupCard);});
  //Закрытие попап-формы по нажатию на "Escape"
  window.onkeydown = function (event) { if (event.keyCode === 27) { closePopup(popupCard); }};
   //Закрытие попап-формы по нажатию на пустое поле
   popupCard.addEventListener('click', (event) => { if (event.target === event.currentTarget) { closePopup(popupCard); }})
    //Слушатель события (нажатие на кнопку типа submit)
    formCardElement.addEventListener('submit', formCardSubmitHandler);

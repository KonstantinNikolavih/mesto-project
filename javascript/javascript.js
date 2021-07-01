
// 1 вареант открытие popup

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
  /* console.log('nameInput'); */
  popup.classList.toggle('popup_opened');

}
  formElement.addEventListener('submit', formSubmitHandler);



//---


// 2 вареант

/* const openPopupAdd = document.querySelector('.profile__button-add');
const popupAdd = document.querySelector('.popupn');
const closePopupAdd = document.querySelector('.popup__closen');


 openPopupAdd.addEventListener('click', function() {
    popupAdd.classList.add('nav_card');
})

closePopupAdd.addEventListener('click', function() {
    popupAdd.classList.remove('nav_card');
})


popupAdd.addEventListener('click', function(event) {
  if (event.target === event.currentTarget) {
    popupAdd.classList.toggle('nav_card');
  }

}) */




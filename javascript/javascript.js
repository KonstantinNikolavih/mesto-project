
// 1 вареант

const openPopup = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');

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

//тест формы для сохрпанения

const formElement = document.querySelector('.popup__input');

const nameInput = document.querySelector('.profile__name');
const jobInput = document.querySelector('.profile__occupation');

const save = document.querySelector('.popup__button-save');

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameInput.textContent = nameInput.Value;
  jobInput.textContent = jobInput.Value;
  save;
}
  formElement.addEventListener('submit', formSubmitHandler);

//---


// 2 вареант

/* const openPopup = document.querySelector('.profile__button-add');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');
 */

/* openPopup.addEventListener('click', function() {
    popup.classList.add('nav_card');
})

closePopup.addEventListener('click', function() {
    popup.classList.remove('nav_card');
})


popup.addEventListener('click', function(event) {
  if (event.target === event.currentTarget) {
    popup.classList.toggle('nav_card');
  }

})

 */

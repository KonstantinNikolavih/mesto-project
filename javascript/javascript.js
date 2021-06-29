
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

/* let imageOnPage = document.querySelector('img');
mageOnPage.getAttribute('src');
console.log('') */

// 2 вареант

/* const openPopup = document.querySelector('.profile__button-add');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');
 */

//тест формы для сохрпанения

const formElement = document.querySelector('.popup__input');

const nameInput = document.querySelector('.profile__name');
const jobInput = document.querySelector('.profile__occupation');

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameInput.textConter = nameInput.Value;
  jobInput.textConter = jobInput.Value;

}
  formElement.addEventListener('submit', formSubmitHandler);

//---


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

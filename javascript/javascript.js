
// 1 вареант

/* const openPopup = document.querySelector('.profile__button-edit');
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
 */
/* let imageOnPage = document.querySelector('img');
mageOnPage.getAttribute('src');
console.log('') */

// 2 вареант

const openPopup = document.querySelector('.profile__button-add');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.popup__close');

openPopup.addEventListener('click', function() {
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


/* let openPopup = document.querySelector('.profile__button-edit');
let closePopup = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');



function toggleClass() {
popup.classList.toggle('popup_opened');
nameInput.value = profileTitle.textContent;
jobInput.value = profileTitle.textContent;
}



openPopup.addEventListener('click', toggleClass);
closePopup/addEventListener('click', toggleClass);

 */


// 3 вареант



/* alert('Hello') */
/* console.log('helo');
function sayHello(name) {
  if (name === '')
  return; // имя файла
}
let greeting = 'Привет, ' + name;
return greeting;
}
*/
/* const button = document.querySelector('.button')
const result = document.querySelector('.result')

const opened = document.querySelector('.popup_opened')

function openpupup (item) {
item.classlist('.popup_opened')
document.removeEventListener('keydowb', closepopupbyesc)
}
 */
/* .then(res => res.json())
.then(res => console.log(res))
addEventListener( ) */

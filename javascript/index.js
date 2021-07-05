/* const container = document.querySelector('.elements');
const songsContainer = container.querySelector('.elements__item');
const addButton = container.querySelector('.profile__button-add');
const resetButton = container.querySelector('.elements__dele');
const noSongsElement = container.querySelector('.elements__list');

//очистить лист
/* function renderHasSongs() {
  resetButton.removeAttribute('disabled');
  resetButton.classList.remove('elements__dele');
  noSongsElement.classList.add('no-songs_hidden');
} */

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

//
/*
function renderNoSongs() {
  resetButton.setAttribute('disabled', true);
  resetButton.classList.add('elements__dele');
  noSongsElement.classList.remove('no-songs_hidden');
}

function addSong(imgValue, titleValue) {
  const songTemplate = document.querySelector('.elements__item').content;
  const songElement = document.querySelector('.elements__item').cloneNode(true);


  // добовление текста и картинки для popup
  songElement.querySelector('.elements__img').src = imgValue;
  songElement.querySelector('.elements__title').textContent = titleValue;




  //лайк
  songElement.querySelector('.elements__group').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__group_active');



  });
    songsContainer.append(songElement);
} */




// добавленте текста и картинок

/*   addButton.addEventListener('click', function () {
  const artist = document.querySelector('.input__text_type_artist');
  const title = document.querySelector('.input__text_type_title');

  addSong(artist.value, title.value);
  renderHasSongs();

  artist.value = '';
  title.value = '';
});

resetButton.addEventListener('click', function () {
  const songs = document.querySelectorAll('.song')

  for (let i = 0; i < songs.length; i++) {
    songs[i].remove();
  }

  renderNoSongs();
}); */


const items = [
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
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];




const itemTemplate = document.querySelector('.item_template');
const list = document.querySelector('.elements__list');
const formButton = document.querySelector('.popup__button-save-card');
/* const resetButton = container.querySelector('.elements__dele'); */
const formInput = document.querySelector('.elements__list');


//test
function renderItem() {
  items.forEach(renderItem);
}


function renderItem(text) {
  const li = document.createElement('li');
  li.classList.add('.elements__item');

  const h4 = document.createElement('h4');
  h4.innerText = text;
  h4.classList.add('elements__title');

  li.appendChild(h4);
  const imgEdit = document.createElement('img');
  imgEdit.setAttribute('src', '.popup__item-card-occupation');
  li.appendChild(imgEdit);
  list.appendChild(li);
//

 /*  const imgDupl = document.createElement('img');
  imgDupl.setAttribute('src', '') */

 /*  const imgDel = document.createElement('img');
  imgDel.setAttribute('src', 'images/kirill-pershin-1088404-unsplash.png');
  li.appendChild(imgEdit); */






}
//рабочий вареант с косяками
/* function renderItem() {
  items.forEach(renderItem);
}


function renderItem(text) {
  const li = document.createElement('li');
  li.classList.add('.elements__item');

  const h4 = document.createElement('h4');
  h4.innerText = text;
  h4.classList.add('elements__title');

  li.appendChild(h4);
  const imgEdit = document.createElement('img');
  imgEdit.setAttribute('src', 'images/kirill-pershin-1088404-unsplash.png');
  li.appendChild(imgEdit);
  list.appendChild(li);
}
 */



function handleSubmit() {
  renderItem(formInput.value);
}

formButton.addEventListener('click', handleSubmit);

renderItem();


//template
/* function renderItem() {
  items.forEach(renderItem);
}

function renderItem(text) {
  console.log('renderItem')
  const htmlElement = itemTemplate.cloneNode(true);
  htmlElement.querySelector('.elements__title').innerText = text;

  setEventListeners(htmlElement);

  list.appendChild(htmlElement);
}

function handleSubmit() {
  renderItem(formInput.value);
}

function handledelete(evt) {
  evt.target.closest('.elements__item').remove();
}

function setEventListeners(element) {
  element.querySelector('.delete').addEventListener('click', handledelete);
}

formButton.addEventListener('click', handleSubmit);

renderItem(); */
//





//очистить лист
/* function renderHasSongs() {
  resetButton.removeAttribute('disabled');
  resetButton.classList.remove('elements__dele');
  noSongsElement.classList.add('no-songs_hidden');
} */

//
/* function renderNoSongs() {
  resetButton.setAttribute('disabled', true);
  resetButton.classList.add('elements__dele');
  noSongsElement.classList.remove('no-songs_hidden');
}

function addSong(imgValue, titleValue) {
  const songTemplate = document.querySelector('.elements__item').content;
  const songElement = document.querySelector('.elements__item').cloneNode(true);


  // добовление текста и картинки для popup
  songElement.querySelector('.elements__img').src = imgValue;
  songElement.querySelector('.elements__title').textContent = titleValue;




  //лайк
  songElement.querySelector('.elements__group').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__group_active');



  });
    songsContainer.append(songElement);
}
 */

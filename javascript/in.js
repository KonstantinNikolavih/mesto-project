/* const container = document.querySelector('.elements');
const songsContainer = container.querySelector('.elements__item');
const addButton = container.querySelector('.profile__button-add');
const resetButton = container.querySelector('.elements__dele');
const noSongsElement = container.querySelector('.elements__list');

 */






/*

// функция открытия popup image
const popupCardWidth = document.querySelector('.popup__card_width');// карточка для большой фотографии
const popupImg = document.querySelector('.popup__img');
const closePopupImg = document.querySelector('.popup__close-card-img');
const elementsImg = document.querySelector('.elements__img')
const elementsTitle = document.querySelector('.elements__title');
const conteinerImg = document.querySelector('.conteiner__img')


function popupCardWidthF(evt) {
  const popupImg = evt.target.closest('.elements__img');
  popupImg.src = elementsImg.src;
  elementsTitle.textContent = evt.targent.closest('.elements__item').textContent;
  popupCardWidthF(conteinerImg);
}


// открытие popup картинки
  popupCardWidth.addEventListener('click', function() {
  popupImg.classList.add('popup__card_width');
})

closePopupImg.addEventListener('click', function() {
  popupImg.classList.remove('popup__card_width');
})
 */






/*
// закрытие popup за границей контейнера
popupImg.addEventListener('click', function(event) {
if (event.target === event.currentTarget) {
  popupImg.classList.toggle('popup__card_width');
}

}) */





/* const openPopup = document.querySelector('.profile__button-edit');
const popup = document.querySelector('.popup'); */



//очистить лист
/* function renderHasSongs() {
  resetButton.removeAttribute('disabled');
  resetButton.classList.remove('elements__dele');
  noSongsElement.classList.add('no-songs_hidden');
} */
/ карточки ////
/* function addSong(imgValue, titleValue) {
  const cardTemplate = document.querySelector('.elements__list').content;
  const cardElement = cardTemplate.querySelector('.elements__item').cloneNode(true);


  cardElement.querySelector('.elements__title').textContent = titleValue;
  cardElement.querySelector('.elements__img').src = imgValue;

cardElement.querySelector('.elements__title').textContent = initialCards.name;
cardElement.querySelector('.elements__img').src = initialCards.link;


// лайк для карточек
  cardElement.querySelector('.elements__group').addEventListener('click', function (evt) {
  evt.target.classList.toggle('elements__group_active');
// не определено еще
function formSubmitHandler (evt) {
  evt.preventDefault();
  nameInput.textContent = titleValue.value;
  jobInput.src = imgValue.value;

  cardElement.classList.toggle('profile__button-add');


}
  formElement.addEventListener('submit', formSubmitHandler);
 */
//////////////////////////////////////

/* function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector('#song-template').content;
  const songElement = songTemplate.querySelector('.song').cloneNode(true);

  songElement.querySelector('.song__artist').textContent = artistValue;
  songElement.querySelector('.song__title').textContent = titleValue; */


// лайк для карточек
/* cardElement.querySelector('.elements__group').addEventListener('click', function (evt) {
  evt.target.classList.toggle('elements__group_active');

});
songContainer.append(cardElement);
} */

// вызов функции

/* function formSubmitHandler (evt) {
  evt.preventDefault();
  title.textContent = title.value;
  img.textContent = img.value;

  popup.classList.toggle('popup_opened');

}
  formElement.addEventListener('submit', formSubmitHandler);
 */





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


/* const initialCards = [
  /* {
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
  }, */
 /*  {
    name: 'Карачаево-Черкасово',
    src: './images/kirill-pershin-1556355-unsplash.png'
  }
]; */





//template
/* function renderItem() {
  initialCards.forEach(renderItem);
} */
// удаление карточки
/* function handledelete (evt) {

  evt.target.closest('.elements__item').remove();

}

function setEventListeners(element) {
  element.querySelector('.elements__dele').addEventListener('click', handledelete);
} */
//

/* function renderItem(text) {
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
  element.querySelector('.elements__dele').addEventListener('click', handledelete);
}

formButton.addEventListener('click', handleSubmit);

renderItem();

 */
//

/* const itemTemplate = document.querySelector('.item_template').content;
const list = document.querySelector('.elements__list');
const formButton = document.querySelector('.popup__button-save-card');
/* const resetButton = container.querySelector('.elements__dele'); */
/*const formInput = document.querySelector('.elements__list'); */





// добовление карточек   /////////////////////////////////////// надо разобрать до конца
/* function addCard(card) {
    list.prepend(card);
}


  initialCards.reverse().forEach(addInitialCards);

function addInitialCards(element) {
  addCard(createCard(element.name, element.link));
}


function createCard(title, image) {
  const carTemplate = itemTemplate.querySelector.cloneNode(true);
  const itemTemplate = document.querySelector('.item_template').textContent; */
 /* const elementsImg = carTemplate.querySelector('.elements__img');
  carTemplate.querySelector('.elements__title').textContent = title;
  elementsImg.src = image;

  deletePhotoListeners(carTemplate);
  likePhotoListeners(carTemplate);
  openPhotoPopupListeners(carTemplate);
  return carTemplate;

}; */



//test добавление картоски
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
  imgEdit.setAttribute('src', '.popup__item-card-occupation');
  li.appendChild(imgEdit);
  list.appendChild(li); */
//

 /*  const imgDupl = document.createElement('img');
  imgDupl.setAttribute('src', '') */

 /*  const imgDel = document.createElement('img');
  imgDel.setAttribute('src', 'images/kirill-pershin-1088404-unsplash.png');
  li.appendChild(imgEdit); */







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



/* function handleSubmit() {
  renderItem(formInput.value);
}

formButton.addEventListener('click', handleSubmit);

renderItem(); */

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

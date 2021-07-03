const container = document.querySelector('.elements');
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

//
function renderNoSongs() {
  resetButton.setAttribute('disabled', true);
  resetButton.classList.add('elements__dele');
  noSongsElement.classList.remove('no-songs_hidden');
}

function addSong(imgValue, titleValue) {
  const songTemplate = document.querySelector('.elements__item').content;
  const songElement = document.querySelector('.elements__item').cloneNode(true);


  // добовление текста и картинки для popup
  songElement.querySelector('.elements__img').imgContent = imgValue;
  songElement.querySelector('.elements__title').textContent = titleValue;




  //лайк
  songElement.querySelector('.elements__group').addEventListener('click', function (evt) {
    evt.target.classList.toggle('elements__group_active');



  });
    songsContainer.append(songElement);
}
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

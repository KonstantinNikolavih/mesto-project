// 4 popup avatar
// переменые для аватар
export const popupAvatar = document.querySelector('.popup_avatar');
export const popupEditAvatar = document.querySelector('.profile__avatar_button');
export const popupEditAvatarClose = popupAvatar.querySelector('.popup__close');
export const popupItemAvatar = popupAvatar.querySelector('.popup__item_avatar');
export const popupAvatarInput = popupAvatar.querySelector('.popup__input');
export const profileAvatar = document.querySelector('.profile__avatar');
// 1 popup profile
// создаём переменые
export const popupPofile = document.querySelector('.popup_pofil');
export const popupEditProfile = document.querySelector('.profile__button-edit');
export const popupEditProfileClose = popupPofile.querySelector('.popup__close');
export const popup = document.querySelector('.popup');
// 2 popup добавление карточки
export const openPopupCard = document.querySelector('.profile__button-add');
export const popupCard = document.querySelector('.popup-card-nov');
export const closePopupCard = popupCard.querySelector('.popup__close');

// создаём переменые //тест формы для сохрпанения
export const formElement = document.querySelector('.popup__input');
export const profileNameElement = document.querySelector('.profile__name');
export const profileJobElement = document.querySelector('.profile__occupation');
export const nameInput = document.querySelector('.popup__item_name');
export const jobInput = document.querySelector('.popup__item_occupation');
// кнопка пременой для сохранение редактированого профиля
export const save = document.querySelector('.popup__button-save');
// переменые popup card img
export const elementList = document.querySelector('.elements__list');
export const openPopupCardImg = document.querySelector('.elements__img_card');
export const popupCardImg = document.querySelector('.popup__card_img');
export const closePopupCardImg = popupCardImg.querySelector('.popup__close');
// переменые popup card img // cart title
export const elementsTitleCard = document.querySelector('.elements__title_card');
// добовление перемены с карточкими
export const popupInputCard = document.querySelector('.popup__input_card');
export const popupItemCardName = document.querySelector('.popup__item-card-name');
export const popupItemCardPlace = document.querySelector('.popup__item-card-occupation');
// template карточки
// обшие переменые для функции добовления карточки
export const photoTemplat = document.querySelector('.item_template').content;
export const cardElement = photoTemplat.querySelector('.elements__item').cloneNode(true);
export const elementsImg = cardElement.querySelector('.elements__img');
export const elementsTitl = cardElement.querySelector('.elements__title');
export const elementsGroup = cardElement.querySelector('.elements__group');
export const elementsDele = cardElement.querySelector('.elements__dele');

export const initialCards = [
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

//function Сохранение... отправка на сервер
export function setSubmitButtonStatus(button, save) {
  if (save) {
    button.textContent = ('Сохранение...');
  } else {
    button.textContent = ('Сохранить');
  }
}

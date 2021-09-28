import {
  popupEditProfile,
  save,
  popupEditProfileClose,
  //formElements,
  profileNameElement,
  profileJobElement,
  nameInput,
  jobInput,
  popupPofile,
} from '../components/utils'
import {closePopup, openPopup,} from '../components/modal';
//обмен с сервером
import {getProfilEdit} from '../components/api';
import {setSubmitButtonStatus} from "./utils";

// ищем не первый попавшийся элемент формы, а именно внутри попапа профиля!
const formElement = popupPofile.querySelector('.popup__input');
const buttonSaveProfile = popupPofile.querySelector('.popup__button-save');

export function init(user) {
  profileNameElement.textContent = user.name;
  profileJobElement.textContent = user.about;
  //обробочик
  formElement.addEventListener('submit', profileSubmit);
}
// открытие
popupEditProfile.addEventListener('click', function () {
  openPopup(popupPofile)
})

// закрытие
popupEditProfileClose.addEventListener('click', function () {
  closePopup(popupPofile)
})


//test 1
/* export function profileSubmit(evt) {
  evt.preventDefault();

 profileNameElement.textContent = nameInput.value;
 profileJobElement.textContent = jobInput.value;

 closePopup(popupPofile)
}; */


// fuction имя функции (параметры) {инструкции}
function profileSubmit(evt) {
  evt.preventDefault();

  setSubmitButtonStatus(buttonSaveProfile, true);
  getProfilEdit(nameInput.value, jobInput.value)
    .then((data) => {
      // конвертируем отправку
      profileNameElement.textContent = data.name;
      profileJobElement.textContent = data.about;
      // соединяем popup c section profil для созранения изменений
      // profileNameElement.textContent = nameInput.value;
      // profileJobElement.textContent = jobInput.value;
      // закрытие формы после сохранения изменений
      closePopup(popupPofile)
    })

    .catch((err) => console.log(`Ошибка ${err}`))
    .finally(() => {
      setSubmitButtonStatus(buttonSaveProfile, false)
    });
}

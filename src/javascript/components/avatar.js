import {changeAvatar} from "./api";
import {popupAvatar, popupAvatarInput, popupItemAvatar, profileAvatar} from "./utils";
import {closePopup} from "./modal";
import {setSubmitButtonStatus} from "./utils";

const buttonSaveNewAvatar = popupAvatar.querySelector('.popup__button-save');

export function init(user) {
  changeAvatarProfile(user.avatar)
}

const changeAvatarProfile = (url) => {
  profileAvatar.src = url;
}

const changeAvatarServer = (url) => {
  setSubmitButtonStatus(buttonSaveNewAvatar, true)
  changeAvatar(url)
    .then(user => {
      changeAvatarProfile(user.avatar);
      popupAvatarInput.reset();
      // закрытие формы после сохранения изменений
      closePopup(popupAvatar);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setSubmitButtonStatus(buttonSaveNewAvatar, false)
    })
}


// fuction имя функции (параметры) {инструкции}
export function avatarSubmit(evt) {
  evt.preventDefault();
  changeAvatarServer(popupItemAvatar.value)
  // соединяем popup c section avatar для созранения изменений
  // profileAvatar.src = popupItemAvatar.src;
}

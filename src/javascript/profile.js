import { popupEditProfile, popupEditProfileClose, formElement, profileNameElement, profileJobElement, nameInput, jobInput, popupPofile, } from './utils'
import { closePopup, openPopup, } from './modal';

// открытие
popupEditProfile.addEventListener('click', function () {
  openPopup(popupPofile)
})

// закрытие
popupEditProfileClose.addEventListener('click', function () {
  closePopup(popupPofile)
})

// fuction имя функции (параметры) {инструкции}
export function profileSubmit(evt) {
  evt.preventDefault();
  // соединяем popup c section profil для созранения изменений
  profileNameElement.textContent = nameInput.value;
  profileJobElement.textContent = jobInput.value;
    // закрытие формы после сохранения изменений
  closePopup(popupPofile)
}
//обробочик
formElement.addEventListener('submit', profileSubmit);

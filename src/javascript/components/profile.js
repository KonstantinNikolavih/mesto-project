import { popupEditProfile, save, popupEditProfileClose, formElement, profileNameElement, profileJobElement, nameInput, jobInput, popupPofile, } from '../components/utils'
import { closePopup, openPopup, } from '../components/modal';
//обмен с сервером
import { getProfil, } from '../components/api';



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
export function profileSubmit(evt) {
  evt.preventDefault();

  statysButton(save, true)
  getProfilEdit(nameInput.value, jobInput.value)
    .then((data) => {
      // конвертируем отправку
      profileJobElement.textContent = data.name;
      profileNameElement.textContent = data.about;
      // соединяем popup c section profil для созранения изменений
      profileNameElement.textContent = nameInput.value;
      profileJobElement.textContent = jobInput.value;
      // закрытие формы после сохранения изменений
      closePopup(popupPofile)
      console.log(data)
    })

    .catch((err) => console.log(`Ошибка ${err}`))
    .finally(() => {
      statysButton(save, false)
      console.log(err)
    });
  }



  //обробочик
  formElement.addEventListener('submit', profileSubmit);




  //function Сохранение... отправка на сервер
  export function statysButton(save, /* dowen */) {
    if (save) {
      save.textContent = /* dowen */ ('Сохранение...');
    } else {
    save.textContent = /* dowen */ ('Сохранить');
  }
}

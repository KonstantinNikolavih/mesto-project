//function кнопки esc
export function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
};

// закрытие popup за границей контейнера
function closePopupZon(event) {
  if (event.target.classList.contains('popup')) {
    closePopup(event.target);
  }
};

// function открытие popup
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closePopupEsc);
  document.addEventListener('click', closePopupZon);
}

// function закрытие popup
export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closePopupEsc);
  document.removeEventListener('click', closePopupZon);
}

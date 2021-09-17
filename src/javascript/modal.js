import {closePopupEsc} from './index.js';

// function открытие popup
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closePopupEsc);
 }

// function закрытие popup
export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closePopupEsc); 
 }

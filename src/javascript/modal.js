import {addClosePopupEsc, removeClosePopupEsc, closePopupEscRem} from './index.js';
/* export */

// function открытие popup
export function openPopup(popup) {
  popup.classList.add("popup_opened");
/*   closePopupEscRem(); */
 }

// function закрытие popup
export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  closePopupEscRem();
 }

import "../index.html";
import "../pages/index.css";

//Попап добавления карточки
const editFormMesto = document.querySelector("#editFormMesto");
const buttonAddCard = document.querySelector("#buttonAddCard");

//**КАРТОЧКИ**
import { addCardsToPage } from "../components/cards.js";
addCardsToPage();

//ПЕРЕИМЕНОВАНИЕ
import { setProfileSubmitHanlder } from "../components/modal.js";
setProfileSubmitHanlder();

//ПОПАП
import { setPopupOpenHandler } from "../components/modal.js";

// setPopupOpenHandler(editFormProfile, popupOpenProfileButton);
setPopupOpenHandler(editFormMesto, buttonAddCard);

//ВАЛИДАЦИЯ
import { turnOnValidation } from "../components/validate.js";

turnOnValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__field",
    buttonSelector: ".popup__submit-button",
    inputErrorClass: "popup__input-error",
});
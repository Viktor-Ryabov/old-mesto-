//IMPORTS
//CONSTANTS
import {
    editForm,
    nameEditForm,
    descriptionEditForm,
    saveProfile,
    nameProfile,
    descriptionProfile,
    editFormProfile,
    popupOpenProfileButton,
    popupCloseProfileButton,
    editFormMesto,
    buttonAddCard,
    popapCloseCard,
    mestoName,
    linkFotoMesto,
    cardButtonLike,
    cardPlacesSection,
    imagePopup,
    imagePopupOpenButton,
    popupCloseFoto
} from "./modules/constants/dom-elements.js";

import {initialCards} from "./modules/constants/initial-сards.js";

//FUNCTIONS
//HANDLERS
import setLikeHandler from "./modules/handlers/set-like.js";
import setDeleteCardHandler from "./modules/handlers/delete-card.js";
//POPUP FUNCTIONS
import openPopup from "./modules/popup/open-popup.js";
import closePopup from "./modules/popup/close-popup.js";
import { addInfoFoto } from "./modules/popup/foto-popup.js";
import rename from "./modules/popup/rename.js"

//Открыть попап
openPopup(editFormProfile, popupOpenProfileButton);
openPopup(editFormMesto, buttonAddCard);

//Закрыть попап
closePopup(editFormProfile, popupCloseProfileButton);
closePopup(editFormMesto, popapCloseCard);
closePopup(imagePopup, popupCloseFoto);

//ПЕРЕИМЕНОВАНИЕ
rename();

//**КАРТОЧКИ**
function createCard(name, link) {
  const template = document.querySelector("#newCardTemplate").content;
  const card = template.cloneNode(true).querySelector(".card");
  card.querySelector(".card__title").textContent = name;
  card.querySelector("img").src = link;
  card.querySelector("img").alt = name;
  setLikeHandler(card.querySelector(".card__button-like"));
  openPopup(imagePopup, card.querySelector(".card__foto"));
  setDeleteCardHandler(card, card.querySelector(".card__delete-button"));
  addInfoFoto(card.querySelector(".card__foto"));
  return card;
}
function addCard(card) {
  cardPlacesSection.prepend(card);
  editFormMesto.classList.remove("popup_opened");
}
function cardsAddToPage(newCards) {
  newCards.forEach(function (i) {
      const card = createCard(i.name, i.link);
      addCard(card);
  });
}
cardsAddToPage(initialCards);

//НОВЫЕ КАРТОЧКИ
editFormMesto.addEventListener("submit", function (event) {
  event.preventDefault();
  const card = createCard(mestoName.value, linkFotoMesto.value);
  addCard(card);
  editFormMesto.classList.remove("effects__open-close");
});

//
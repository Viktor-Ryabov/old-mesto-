//ПРОФАЙЛ
const editForm = document.querySelector("#editForm");
const nameEditForm = document.querySelector("#nameEditForm");
const descriptionEditForm = document.querySelector("#descriptionEditForm");
const saveProfile = document.querySelector("#saveDataButton");

//ЭДЕМЕНТЫ ФОРМЫ ПРОФАЙЛА
const nameProfile = document.querySelector("#nameProfile");
const descriptionProfile = document.querySelector("#descriptionProfile");

//Попап профиля
const editFormProfile = document.querySelector("#editFormProfile");
const popupOpenProfileButton = document.querySelector("#popupOpenProfile");
const popupCloseProfileButton = document.querySelector("#popupCloseProfile");

//Попап добавления карточки
const editFormMesto = document.querySelector("#editFormMesto");
const buttonAddCard = document.querySelector("#buttonAddCard");
const popapCloseCard = document.querySelector("#popapCloseCard");
const mestoName = document.querySelector("#mestoName");
const linkFotoMesto = document.querySelector("#linkFotoMesto");
const formMesto = document.forms[1];

//Лайк
const cardButtonLike = document.querySelector(".card__button-like");

//Секция с карточками
const cardPlacesSection = document.querySelector(".places");

//ПОПАП ФОТО
const imagePopup = document.querySelector("#image-popup");
const imagePopupOpenButton = document.querySelector("#imagePopupOpenButton");
const popupCloseFoto = document.querySelector("#popapCloseFoto");
const imagePopupFotoBig = document.querySelector(".popup__foto");
const imagePopupFotoText = document.querySelector(".popup__discription");

function createCard(name, link) {
  const template = document.querySelector("#newCardTemplate").content;
  const card = template.cloneNode(true).querySelector(".card");
  card.querySelector(".card__title").textContent = name;
  card.querySelector("img").src = link;
  card.querySelector("img").alt = name;
  setLikeHandler(card.querySelector(".card__button-like"));
  setPopupOpenEventListener(imagePopup, card.querySelector(".card__foto"));
  setDeleteCardHandler(card, card.querySelector(".card__delete-button"));
  setImageClickHandler(card.querySelector(".card__foto"));
  return card;
}

function addNewCard(card) {
  cardPlacesSection.prepend(card);
}

function addCardsToPage(newCards) {
  newCards.forEach(function (cardData) {
    const cardToAdd = createCard(cardData.name, cardData.link);
    addNewCard(cardToAdd);
  });
}
addCardsToPage(initialCards);

//НОВЫЕ КАРТОЧКИ
editFormMesto.addEventListener("submit", function (event) {
  event.preventDefault();
  const newCard = createCard(mestoName.value, linkFotoMesto.value);
  addNewCard(newCard);
  closePopup(editFormMesto);
  formMesto.reset();
});

//Открыть попап
function openPopup(popupWindow) {
  popupWindow.classList.add("popup_opened");
}

//Закрыть попап
function closePopup(popupWindow) {
  popupWindow.classList.remove("popup_opened");
}

//обрабочики событий
function setPopupOpenEventListener(popupWindow, button) {
  button.addEventListener("click", function () {
    openPopup(popupWindow);
  });
}
setPopupOpenEventListener(editFormMesto, buttonAddCard);

function setPopupCloseEventListener(popupWindow, button) {
  button.addEventListener("click", function () {
    closePopup(popupWindow);
  });
}

setPopupCloseEventListener(editFormProfile, popupCloseProfileButton);
setPopupCloseEventListener(imagePopup, popupCloseFoto);

//Функция ЛАЙК
function setLikeHandler(buttonLike) {
  buttonLike.addEventListener("click", function () {
    buttonLike.classList.toggle("card__button-like_active");
  });
}

//Функция "большие фото" открыть
function setImageClickHandler(imageClick) {
  imageClick.addEventListener("click", function () {
    imagePopupFotoBig.src = imageClick.src;
    imagePopupFotoText.textContent = imageClick.alt;
  });
}

//ПЕРЕИМЕНОВАНИЕ
function setProfileSubmitHandler() {
  editFormProfile.addEventListener("submit", function (event) {
    event.preventDefault();
    nameProfile.textContent = nameEditForm.value;
    descriptionProfile.textContent = descriptionEditForm.value;
    closePopup(editFormProfile);
  });
}
setProfileSubmitHandler();

//УДАЛЕНИЕ КАРТОЧКИ
function setDeleteCardHandler(card, deletButton) {
  deletButton.addEventListener("click", function () {
    card.remove();
  });
}

function openPopupProfile(button, popupWindow) {
  button.addEventListener("click", () => {
    nameEditForm.value = nameProfile.textContent;
    descriptionEditForm.value = descriptionProfile.textContent;
    openPopup(popupWindow);
  });
}
openPopupProfile(popupOpenProfileButton, editFormProfile);

function renderMestoPopup(button, popupWindow) {
  button.addEventListener("click", () => {
    mestoName.value = "";
    linkFotoMesto.value = "";
    closePopup(popupWindow);
  });
}
renderMestoPopup(popapCloseCard, editFormMesto);

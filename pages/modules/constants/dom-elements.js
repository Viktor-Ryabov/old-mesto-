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

export {
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
  popupCloseFoto,
  imagePopupFotoBig,
  imagePopupFotoText,
};

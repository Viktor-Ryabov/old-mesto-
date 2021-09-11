"use strict";

//ЭЛЕМЕНТЫ
//кнопка лайк
var buttonLike = Array.from(document.querySelectorAll('.card__button-like')); //ПРОФАЙЛ

var editForm = document.querySelector('#editForm');
var nameEditForm = document.querySelector('#nameEditForm'); //сокращенная запись

var descriptionEditForm = document.querySelector('#descriptionEditForm');
var saveProfile = document.querySelector('#saveData'); //ЭДЕМЕНТЫ ФОРМЫ ПРОФАЙЛА

var nameProfile = document.querySelector('#nameProfile');
var descriptionProfile = document.querySelector('#descriptionProfile');
var editFormProfile = document.querySelector('#editFormProfile');
var popupOpenProfile = document.querySelector('#popupOpenProfile');
var popupCloseProfile = document.querySelector('#popupCloseProfile'); //ПОПАП ДОБАВИТЬ КАРТОЧКУ

var editFormMesto = document.querySelector('#editFormMesto');
var buttonAddCard = document.querySelector('#buttonAddCard');
var popapCloseCard = document.querySelector('#popapCloseCard');
var mestoName = document.querySelector('#mestoName');
var linkFotoMesto = document.querySelector("#linkFotoMesto"); //ПОПАП ФОТО

var imagePopup = document.querySelector('#image-popup');
var imagePopupOpen = document.querySelectorAll('.card__foto');
var popapCloseFoto = document.querySelector('#popapCloseFoto');
var imagePopupFotoBig = document.querySelector('.image-popup__foto');
var imagePopupFotoText = document.querySelector('.image-popup__discription'); //Удаление карточки

var deleteCardButton = Array.from(document.querySelectorAll(".card__delete-button"));
var cardPlace = document.querySelectorAll('.card'); //Добавление карточки

var cardPlacesSection = document.querySelector('.places');

if ('content' in document.createElement('template')) {
  var newCardTemplate = document.querySelector('#newCardTemplate').content;
  console.log(newCardTemplate);
  editFormMesto.addEventListener('submit', function (event) {
    event.preventDefault();
    var clone = newCardTemplate.cloneNode(true);
    console.log(clone.querySelector('.card__title'));
    clone.querySelector('.card__title').innerHTML = mestoName.value;
    clone.querySelector('img').src = linkFotoMesto.value;
    clone.querySelector('img').alt = mestoName.value;
    var deleteCardButtonNew = clone.querySelector('.card__delete-button');
    deleteCardButton.push(deleteCardButtonNew);
    console.log(deleteCardButton);
    var buttonLikeNew = clone.querySelector('.card__button-like');
    buttonLike.push(buttonLikeNew);
    var imagePopupOpenNew = clone.querySelector('.card__foto');
    fotoOpen(imagePopupOpenNew);
    cardPlacesSection.append(clone); //слушатели событий

    editFormMesto.style.visibility = 'hidden ';
  });
} //цикл перебора для удаления карточек


var _loop = function _loop(i) {
  deleteCardButton[i].addEventListener('click', function () {
    cardPlace[i].remove();
  });
};

for (var i = 0; i < deleteCardButton.length; i++) {
  _loop(i);
} //Функция "большие фото" открыть


fotoOpen = function fotoOpen(imageClick) {
  var _loop2 = function _loop2(_i) {
    imageClick[_i].addEventListener('click', function () {
      imagePopup.style.visibility = 'visible';
      imagePopupFotoBig.src = imageClick[_i].src;
      imagePopupFotoText.innerHTML = imageClick[_i].alt;
      console.log(imagePopupFotoText.innerHTML);
    });
  };

  for (var _i = 0; _i < imagePopupOpen.length; _i++) {
    _loop2(_i);
  }
};

fotoOpen(imagePopupOpen); //ПОПАП ОТКРЫТЬ

popupOpened = function popupOpened(openedForm, buttonOpen, i) {
  buttonOpen.addEventListener('click', function () {
    openedForm.style.visibility = 'visible';
  });
};

popupOpened(editFormProfile, popupOpenProfile);
popupOpened(editFormMesto, buttonAddCard); //ПОПАП ЗАКРЫТЬ

popupClose = function popupClose(closeForm, buttonClose) {
  buttonClose.addEventListener('click', function () {
    closeForm.style.visibility = 'hidden';
  });
};

popupClose(editFormProfile, popupCloseProfile);
popupClose(editFormMesto, popapCloseCard);
popupClose(imagePopup, popapCloseFoto); //ПЕРЕИМЕНОВАНИЕ

function rename() {
  editFormProfile.addEventListener('submit', function (event) {
    event.preventDefault();
    nameProfile.innerHTML = nameEditForm.value;
    editFormProfile.style.visibility = 'hidden ';
  });
  editFormProfile.addEventListener('submit', function () {
    descriptionProfile.innerHTML = descriptionEditForm.value;
    editFormProfile.style.visibility = 'hidden ';
  });
}

;
rename(); //КНОПКА ЛАЙК

buttonLike.forEach(function (item) {
  item.addEventListener('click', function () {
    item.classList.toggle('card__button-like_active');
  });
});
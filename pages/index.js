//ПРОФАЙЛ
const editForm = document.querySelector('#editForm');
const nameEditForm = document.querySelector('#nameEditForm');
const descriptionEditForm = document.querySelector('#descriptionEditForm');
const saveProfile = document.querySelector('#saveDataButton');

//ЭДЕМЕНТЫ ФОРМЫ ПРОФАЙЛА
const nameProfile = document.querySelector('#nameProfile');
const descriptionProfile = document.querySelector('#descriptionProfile');

//Попап профиля
const editFormProfile = document.querySelector('#editFormProfile');
const popupOpenProfileButton = document.querySelector('#popupOpenProfile');
const popupCloseProfileButton = document.querySelector('#popupCloseProfile');

//Попап добавления карточки
const editFormMesto = document.querySelector('#editFormMesto');
const buttonAddCard = document.querySelector('#buttonAddCard');
const popapCloseCard = document.querySelector('#popapCloseCard');
const mestoName = document.querySelector('#mestoName');
const linkFotoMesto = document.querySelector("#linkFotoMesto");

//Лайк
const cardButtonLike = document.querySelector('.card__button-like');

//Секция с карточками
const cardPlacesSection = document.querySelector('.places');

//ПОПАП ФОТО
const imagePopup = document.querySelector('#image-popup');
const imagePopupOpenButton = document.querySelector('#imagePopupOpenButton');
const popupCloseFoto = document.querySelector('#popapCloseFoto');
const imagePopupFotoBig = document.querySelector('.popup__foto');
const imagePopupFotoText = document.querySelector('.popup__discription');

function createCard(name, link) {
    const template = document.querySelector('#newCardTemplate').content;
    const card = template.cloneNode(true).querySelector('.card');
    card.querySelector('.card__title').textContent = name;
    card.querySelector('img').src = link;
    card.querySelector('img').alt = name;
    setLikeHandler(card.querySelector('.card__button-like'));
    openPopup(imagePopup, card.querySelector('.card__foto'));
    setDeleteCardHandler(card, card.querySelector('.card__delete-button'));
    addInfoFoto(card.querySelector('.card__foto'));
    return card;
  }
  
  
  function addCard(card) {
    cardPlacesSection.prepend(card);
    editFormMesto.classList.remove("popup_opened");
  }
  
  function cardsAddToPage(newCards) {
    newCards.forEach (function(i) {
      const card = createCard(i.name, i.link);  
      addCard(card);
    });
  }

  cardsAddToPage(initialCards);
  
  //НОВЫЕ КАРТОЧКИ
  editFormMesto.addEventListener('submit', function (event) {
    event.preventDefault();  
    const card = createCard(mestoName.value, linkFotoMesto.value);
    addCard(card);    
    editFormMesto.classList.remove("effects__open-close");
  });


//Открыть попап
function openPopup(popupWindow, button) {
    button.addEventListener('click', function(){
        popupWindow.classList.add("popup_opened");
    });
}
openPopup(editFormProfile, popupOpenProfileButton);
openPopup(editFormMesto, buttonAddCard);


//Закрыть попап
function closePopup(popupWindow, button) {
    button.addEventListener('click', function(){
        popupWindow.classList.remove("popup_opened");
    });
}
closePopup(editFormProfile, popupCloseProfileButton);
closePopup(editFormMesto, popapCloseCard);
closePopup(imagePopup, popupCloseFoto);

//Функция ЛАЙК
function setLikeHandler(buttonLike) {
    buttonLike.addEventListener('click', function() {
        buttonLike.classList.toggle('card__button-like_active');
        });
}

//Функция "большие фото" открыть
function addInfoFoto(imageClick) {
    imageClick.addEventListener('click', function () {
        imagePopupFotoBig.src = imageClick.src;
        imagePopupFotoText.textContent = imageClick.alt;
    });
}

//ПЕРЕИМЕНОВАНИЕ
function rename () {
    editFormProfile.addEventListener('submit', function(event){
        event.preventDefault();
        nameProfile.textContent = nameEditForm.value;
        descriptionProfile.textContent = descriptionEditForm.value;
        editFormProfile.classList.remove("popup_opened");
    });

};
rename();

//УДАЛЕНИЕ КАРТОЧКИ
function setDeleteCardHandler(card, deletButton){
    deletButton.addEventListener('click', function(){
        card.remove();
    });
}
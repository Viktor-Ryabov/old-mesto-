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
const imagePopupOpenButton = document.querySelector('.card__foto');
const imagePopupCloseButton = document.querySelector('#popapCloseFoto');
const imagePopupFotoBig = document.querySelector('.popup__foto');
const imagePopupFotoText = document.querySelector('.popup__discription');

const initialCards = [
    {
      name: 'Ай Петри',
      link: 'https://sun9-41.userapi.com/impg/gurnCn25L6y79GWZDnpIj4OIKOLMz2SRTUX6gg/Znf06pMYqQY.jpg?size=1024x1024&quality=96&sign=a8465c15e3248ca309866c8df31b2154&type=album'
    },
    {
      name: 'Сменцево',
      link: 'https://sun9-30.userapi.com/impg/HnTKMtNznxV0CtMYH91sANLA1HvcY_XsZecP7g/fJ40DhxiHlg.jpg?size=1024x1024&quality=96&sign=f448122cc4bf2f99c7b4aa1cee22c3b8&type=album'
    },
    {
      name: 'Архыз',
      link: './images/img/arhiz.jpg'
    },
    {
      name: 'Перевал Голубева',
      link: 'https://sun9-46.userapi.com/impg/aS157mDjauuw5DKHunwxuBVtxn1p6m2rrR4Low/otFnQmGNQFk.jpg?size=1024x1024&quality=96&sign=3661322f5eb3d7872a66382172b4fcf7&type=album'
    },
    {
      name: 'Карелия',
      link: 'https://sun9-62.userapi.com/impg/SlVPrJvqxSWJsa4nYjRWnOsUtZItrKKcy34jSQ/ktJiA6yrxw8.jpg?size=1024x1024&quality=96&sign=ea4074a6b61958a2fbffeb7f4128907e&type=album'
    },
    {
      name: 'Домбай',
      link: 'https://sun9-51.userapi.com/impg/RhDbe5aNVpxeb3iRUOh1K2jXVmtekEmAb06Y5g/tgDP7oO6O1k.jpg?size=1024x1024&quality=96&sign=c506f401dd7d319af32241c0b0d46d49&type=album'
    }
    ];

//КЛОНИРОВАНИЕ КАРТОЧЕК
function addCard(name, link) {
    if ('content' in document.createElement('template')) {
        const newCardTemplate = document.querySelector('#newCardTemplate').content;
        let clone = newCardTemplate.cloneNode(true);
        clone.querySelector('.card__title').textContent = name;
        clone.querySelector('img').src = link;
        clone.querySelector('img').alt = name;
        noticeLike(clone.querySelector('.card__button-like'));
        addInfoFoto(clone.querySelector('.card__foto'));
        openPopup(imagePopup, (clone.querySelector('.card__foto')));
        deleteCard(clone.querySelector('.card'), clone.querySelector('.card__delete-button'));
        cardPlacesSection.insertBefore(clone, cardPlacesSection.firstChild);
    };
}

//ДОБАВЛЕНИЕ КАРТОЧЕК НА СТРАНИЦУ
function addNewCardToPage(massive) {
    for(let i = 0; i < massive.length; i++) {
        addCard(massive[i].name, massive[i].link);
    }
}
addNewCardToPage(initialCards);


//СОЗДАНИЕ НОВЫХ КАРТОЧЕК
let createNewCard = function(form, input1, input2) {
    let newCardToBeAdded = [];
    form.addEventListener('submit', function(event){
        event.preventDefault();
        newCardToBeAdded = [
            {
            name: input1.value,
            link: input2.value
            }
        ];
        console.log(newCardToBeAdded);
        addNewCardToPage(newCardToBeAdded);
        form.classList.remove("popup_opened");
        newCardToBeAdded = [];

    }); 
}
createNewCard(editFormMesto, mestoName, linkFotoMesto);

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
        // popupWindow.classList.add("effects__opacity_close");
        popupWindow.classList.remove("popup_opened");
        // popupWindow.classList.remove("effects__opacity_close"); 
    });
}
closePopup(editFormProfile, popupCloseProfileButton);
closePopup(editFormMesto, popapCloseCard);
closePopup(imagePopup, imagePopupCloseButton);

//Функция ЛАЙК
function noticeLike(buttonLike) {
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
function deleteCard(card, deletButton){
    deletButton.addEventListener('click', function(){
        card.remove();
    });
}



//Попап профиля
const editFormProfile = document.querySelector('#editFormProfile'); //форма
const popupOpenProfileButton = document.querySelector('#popupOpenProfile');//кнокпа открыть
const popupCloseProfileButton = document.querySelector('#popupCloseProfile');//кнопка зкарыть

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
const imagePopupOpenButton = document.querySelectorAll('.card__foto');
const imagePopupCloseButton = document.querySelector('#imagePopupCloseButton');
const imagePopupFotoBig = document.querySelector('.image-popup__foto');
const imagePopupFotoText = document.querySelector('.image-popup__discription');

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

function addCard(name, link) {
    if ('content' in document.createElement('template')) {
        const newCardTemplate = document.querySelector('#newCardTemplate').content;
        let clone = newCardTemplate.cloneNode(true);
        console.log(clone.querySelector('.card__title'));
        clone.querySelector('.card__title').innerHTML = name;
        clone.querySelector('img').src = link;
        clone.querySelector('img').alt = name;
        cardPlacesSection.insertBefore(clone, cardPlacesSection.firstChild);
    };
}
console.log(initialCards[1].name);

function cards(massive) {
    for(let i = 0; i < massive.length; i++) {
        console.log(massive[i].name, massive[i].link);
        addCard(massive[i].name, massive[i].link);  
    }
}
cards(initialCards);


// initialCards.forEach( function (item) {
//     console.log(initialCards[item].name)
// });

//initialCards.forEach(item => addCard(initialCards["name"], initialCards["link"]));


//Открыть попап
function popupOpenFunction(popupWindow, button) {
    button.addEventListener('click', function(){
        popupWindow.classList.add("effects__open-close");
    });
}

popupOpenFunction(editFormProfile, popupOpenProfileButton);
popupOpenFunction(editFormMesto, buttonAddCard);

//Закрыть попап
function popupCloseFunction(popupWindow, button) {
    button.addEventListener('click', function(){
        popupWindow.classList.add("effects__opacity_close");
        popupWindow.classList.remove("effects__open-close");
        popupWindow.classList.remove("effects__opacity_close"); 
    }); 
}
popupCloseFunction(editFormProfile, popupCloseProfileButton);
popupCloseFunction(editFormMesto, popapCloseCard);

//*Функция ЛАЙК
// function like(buttonLike) {
//     buttonLike.addEventListener('click', function() {
//         buttonLike.classList.toggle('card__button-like_active');
//         });
// }
// like(cardButtonLike);

//Функция удаления карточки
function deleteCard() {
    
}

//Функция "большие фото" открыть
fotoOpen = function(imageClick) {
    imageClick.addEventListener('click', function () {
        imagePopup.classList.add("effects__open-close");
        imagePopupFotoBig.src = imageClick.src;
        imagePopupFotoText.innerHTML = imageClick.alt;
    });
}





// //ЭЛЕМЕНТЫ

// //кнопка лайк
// 

// //ПРОФАЙЛ
// const editForm = document.querySelector('#editForm');
// const nameEditForm = document.querySelector('#nameEditForm'); //сокращенная запись
// const descriptionEditForm = document.querySelector('#descriptionEditForm');
// const saveProfile = document.querySelector('#saveData');

// //ЭДЕМЕНТЫ ФОРМЫ ПРОФАЙЛА
// const nameProfile = document.querySelector('#nameProfile');
// const descriptionProfile = document.querySelector('#descriptionProfile');
// const editFormProfile = document.querySelector('#editFormProfile');
// const popupOpenProfileButton = document.querySelector('#popupOpenProfile');
// const popupCloseProfileButton = document.querySelector('#popupCloseProfile');

// //ПОПАП ДОБАВИТЬ КАРТОЧКУ




// //Удаление карточки
// const deleteCardButton = document.querySelectorAll(".card__delete-button");
// const cardPlace = document.querySelectorAll('.card');











// //     console.log(initialCards[2].name);
// //     console.log(cardPlace);

// // for(let i = 0; i < cardPlace.length; i++){
// //     cardPlace[i].src = initialCards[i].link;
// //     cardPlace[i].alt = initialCards[i].name;
// //     cardPlace[i].outerText = initialCards[i].name;
// // }

    
// //Добавление карточки
// 

// cloneTemplateCard = function() {
//     if ('content' in document.createElement('template')) {
//         const newCardTemplate = document.querySelector('#newCardTemplate').content;
//         editFormMesto.addEventListener('submit', function(event){
//             event.preventDefault();
//             let clone = newCardTemplate.cloneNode(true);
//             console.log(clone.querySelector('.card__title'));
//             clone.querySelector('.card__title').innerHTML = mestoName.value;
//             clone.querySelector('img').src = linkFotoMesto.value;
//             clone.querySelector('img').alt = mestoName.value;
//             cardPlacesSection.append(clone);
//         });  
//     }
// }


       
// const deleteCardButtonNew = clone.querySelector('.card__delete-button');
// deleteCardButton.push(deleteCardButtonNew);
// console.log(deleteCardButton);

// const buttonLikeNew = clone.querySelector('.card__button-like');
// buttonLike.push(buttonLikeNew);

// fotoOpen(imagePopupOpenButtonNew);



// //слушатели событий



// editFormMesto.style.visibility = 'hidden ';       



// //цикл перебора для удаления карточек
// deletCardFunction = function()
//     deleteCardButton.addEventListener('click', function(){
//         cardPlace[i].remove();
//     });
// }



// //ПОПАП ОТКРЫТЬ
// popupOpened = function (openedForm, buttonOpen, i) {
//     buttonOpen.addEventListener('click', function(){
//         openedForm.style.visibility = 'visible';
//     });
// }
// popupOpened(editFormProfile, popupOpenProfile);
// popupOpened(editFormMesto, buttonAddCard);

// //ПОПАП ЗАКРЫТЬ
// popupClose = function (closeForm, buttonClose) {
//     buttonClose.addEventListener('click', function() {
//         closeForm.style.visibility = 'hidden';
//     })
// }
// popupClose(editFormProfile, popupCloseProfile);
// popupClose(editFormMesto, popapCloseCard);
// popupClose(imagePopup, imagePopupCloseButton);

// //ПЕРЕИМЕНОВАНИЕ
// function rename () {
//     editFormProfile.addEventListener('submit', function(event){
//         event.preventDefault();
//         nameProfile.innerHTML = nameEditForm.value;
//         editFormProfile.style.visibility = 'hidden ';
//         });
//     editFormProfile.addEventListener('submit', function(){
//         descriptionProfile.innerHTML = descriptionEditForm.value;
//         editFormProfile.style.visibility = 'hidden ';
//     });
// };

// rename();

// //КНОПКА ЛАЙК



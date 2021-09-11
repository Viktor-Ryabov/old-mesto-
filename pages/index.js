//ПРОФАЙЛ
const editForm = document.querySelector('#editForm');
const nameEditForm = document.querySelector('#nameEditForm');
const descriptionEditForm = document.querySelector('#descriptionEditForm');
const saveProfile = document.querySelector('#saveDataButton');

//ЭДЕМЕНТЫ ФОРМЫ ПРОФАЙЛА
const nameProfile = document.querySelector('#nameProfile');
const descriptionProfile = document.querySelector('#descriptionProfile');

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
const imagePopupOpenButton = document.querySelector('.card__foto');
const imagePopupCloseButton = document.querySelector('#popapCloseFoto');
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

//КЛОНИРОВАНИЕ КАРТОЧЕК
function addCard(name, link) {
    if ('content' in document.createElement('template')) {
        const newCardTemplate = document.querySelector('#newCardTemplate').content;
        let clone = newCardTemplate.cloneNode(true);
        clone.querySelector('.card__title').innerHTML = name;
        clone.querySelector('img').src = link;
        clone.querySelector('img').alt = name;
        like(clone.querySelector('.card__button-like'));
        fotoOpen(clone.querySelector('.card__foto'));
        
        console.log(clone.querySelector('.card'), clone.querySelector('card__delete-button'));
        deletCardFunction(clone.querySelector('.card'), clone.querySelector('.card__delete-button'));
        //popupCloseFunction();

        cardPlacesSection.insertBefore(clone, cardPlacesSection.firstChild);
    };
}
//ДОБАВЛЕНИЕ КАРТОЧЕК НА СТРАНИЦУ
function cardsAddToPage(massive) {
    for(let i = 0; i < massive.length; i++) {
        console.log(massive[i].name, massive[i].link);
        addCard(massive[i].name, massive[i].link);
    }
}
console.log(initialCards);
cardsAddToPage(initialCards);

//НОВЫЕ КАРТОЧКИ
editFormMesto.addEventListener('submit', function(event){
    event.preventDefault();
    const newCardToBeAdded = [
        {
        name: mestoName.value,
        link: linkFotoMesto.value
        }
    ];
    console.log(newCardToBeAdded);
    cardsAddToPage(newCardToBeAdded);
    editFormMesto.classList.remove("effects__open-close");
});

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
        // popupWindow.classList.add("effects__opacity_close");
        popupWindow.classList.remove("effects__open-close");
        // popupWindow.classList.remove("effects__opacity_close"); 
    }); 
}
popupCloseFunction(editFormProfile, popupCloseProfileButton);
popupCloseFunction(editFormMesto, popapCloseCard);
popupCloseFunction(imagePopup, imagePopupCloseButton);

//Функция ЛАЙК
function like(buttonLike) {
    buttonLike.addEventListener('click', function() {
        buttonLike.classList.toggle('card__button-like_active');
        });
}

//Функция "большие фото" открыть
function fotoOpen(imageClick) {
    imageClick.addEventListener('click', function () {
        imagePopup.classList.add("effects__open-close");
        imagePopupFotoBig.src = imageClick.src;
        imagePopupFotoText.innerHTML = imageClick.alt;
    });
}

//ПЕРЕИМЕНОВАНИЕ
function rename () {
    editFormProfile.addEventListener('submit', function(event){
        event.preventDefault();
        nameProfile.innerHTML = nameEditForm.value;
        descriptionProfile.innerHTML = descriptionEditForm.value;
        editFormProfile.classList.remove("effects__open-close");
    });

};
rename();

//УДАЛЕНИЕ КАРТОЧКИ
function deletCardFunction(card, deletButton){
    deletButton.addEventListener('click', function(){
        card.remove();
    });
}




// //ЭЛЕМЕНТЫ

// //кнопка лайк
// 



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










// //КНОПКА ЛАЙК



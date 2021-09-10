//ЭЛЕМЕНТЫ
//фотографии для карточек


//кнопка лайк
const buttonLike = Array.from(document.querySelectorAll('.card__button-like'));

//ПРОФАЙЛ
const editForm = document.querySelector('#editForm');
const nameEditForm = document.querySelector('#nameEditForm'); //сокращенная запись
const descriptionEditForm = document.querySelector('#descriptionEditForm');
const saveProfile = document.querySelector('#saveData');

//ЭДЕМЕНТЫ ФОРМЫ ПРОФАЙЛА
const nameProfile = document.querySelector('#nameProfile');
const descriptionProfile = document.querySelector('#descriptionProfile');
const editFormProfile = document.querySelector('#editFormProfile');
const popupOpenProfile = document.querySelector('#popupOpenProfile');
const popupCloseProfile = document.querySelector('#popupCloseProfile');

//ПОПАП ДОБАВИТЬ КАРТОЧКУ
const editFormMesto = document.querySelector('#editFormMesto');
const buttonAddCard = document.querySelector('#buttonAddCard');
const popapCloseCard = document.querySelector('#popapCloseCard');
const mestoName = document.querySelector('#mestoName');
const linkFotoMesto = document.querySelector("#linkFotoMesto");


//ПОПАП ФОТО
const imagePopup = document.querySelector('#image-popup');
const imagePopupOpen = document.querySelectorAll('.card__foto');
const popapCloseFoto = document.querySelector('#popapCloseFoto');
const imagePopupFotoBig = document.querySelector('.image-popup__foto');
const imagePopupFotoText = document.querySelector('.image-popup__discription');

//Удаление карточки
const deleteCardButton = Array.from(document.querySelectorAll(".card__delete-button"));
const cardPlace = document.querySelectorAll('.card');
const initialCards = [
    {
      name: 'Ай Петри',
      link: 'https://disk.yandex.ru/i/VlGyQNDCAwPulw'
    },
    {
      name: 'Сменцево',
      link: 'https://disk.yandex.ru/i/CZ6nuCYtCmi4eQ'
    },
    {
      name: 'Архыз',
      link: 'https://disk.yandex.ru/i/nEKKiNigqaqXLQ'
    },
    {
      name: 'Перевал Голубева',
      link: 'https://disk.yandex.ru/i/lHuQ8fFyikj62A'
    },
    {
      name: 'Карелия',
      link: 'https://disk.yandex.ru/i/5UoXdA0Qg0UaAw'
    },
    {
      name: 'Домбай',
      link: 'https://disk.yandex.ru/i/ljiysFENdEeJdw'
    }
    ];

    console.log(initialCards[2].name);

// for(let i = 0; i < cardPlace.length; i++){
//     cardPlace[i].src = initialCards[i].link;
//     cardPlace[i].alt = initialCards[i].name;
//     cardPlace[i].innerHTML = initialCards[i].name;
// }

    
//Добавление карточки
const cardPlacesSection = document.querySelector('.places');
if ('content' in document.createElement('template')) {
    const newCardTemplate = document.querySelector('#newCardTemplate').content;
    editFormMesto.addEventListener('submit', function(event){
        event.preventDefault();
        let clone = newCardTemplate.cloneNode(true);
        console.log(clone.querySelector('.card__title'));
        clone.querySelector('.card__title').innerHTML = mestoName.value;
        clone.querySelector('img').src = linkFotoMesto.value;
        clone.querySelector('img').alt = mestoName.value;
       
        const deleteCardButtonNew = clone.querySelector('.card__delete-button');
        deleteCardButton.push(deleteCardButtonNew);
        console.log(deleteCardButton);

        const buttonLikeNew = clone.querySelector('.card__button-like');
        buttonLike.push(buttonLikeNew);

        fotoOpen(imagePopupOpenNew);

        
        cardPlacesSection.append(clone);
        //слушатели событий
        
        

        editFormMesto.style.visibility = 'hidden ';       
    });  
}



//цикл перебора для удаления карточек
for(let i = 0; i < deleteCardButton.length; i++){
    deleteCardButton[i].addEventListener('click', function(){
        cardPlace[i].remove();
    });
}

//Функция "большие фото" открыть
fotoOpen = function(imageClick) {
    for(let i = 0; i < imagePopupOpen.length; i++) {
            imageClick[i].addEventListener('click', function () {
                imagePopup.style.visibility = 'visible';
                imagePopupFotoBig.src = imageClick[i].src;
                imagePopupFotoText.innerHTML = imageClick[i].alt;
                console.log(imagePopupFotoText.innerHTML);
        });
    }
}
fotoOpen(imagePopupOpen);

//ПОПАП ОТКРЫТЬ
popupOpened = function (openedForm, buttonOpen, i) {
    buttonOpen.addEventListener('click', function(){
        openedForm.style.visibility = 'visible';
    });
}
popupOpened(editFormProfile, popupOpenProfile);
popupOpened(editFormMesto, buttonAddCard);

//ПОПАП ЗАКРЫТЬ
popupClose = function (closeForm, buttonClose) {
    buttonClose.addEventListener('click', function() {
        closeForm.style.visibility = 'hidden';
    })
}
popupClose(editFormProfile, popupCloseProfile);
popupClose(editFormMesto, popapCloseCard);
popupClose(imagePopup, popapCloseFoto);

//ПЕРЕИМЕНОВАНИЕ
function rename () {
    editFormProfile.addEventListener('submit', function(event){
        event.preventDefault();
        nameProfile.innerHTML = nameEditForm.value;
        editFormProfile.style.visibility = 'hidden ';
        });
    editFormProfile.addEventListener('submit', function(){
        descriptionProfile.innerHTML = descriptionEditForm.value;
        editFormProfile.style.visibility = 'hidden ';
    });
};

rename();

//КНОПКА ЛАЙК
buttonLike.forEach((item) => {
    item.addEventListener('click', function() {
        item.classList.toggle('card__button-like_active');
    });
});



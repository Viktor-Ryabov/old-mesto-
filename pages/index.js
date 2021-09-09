//ЭЛЕМЕНТЫ
//ФОРМА ПРОФАЙЛА
const editForm = document.querySelector('#editForm');
const nameEditForm = document.querySelector('#nameEditForm'); //сокращенная запись
const descriptionEditForm = document.querySelector('#descriptionEditForm');
const saveProfile = document.querySelector('#saveData');

//ЭДЕМЕНТЫ ФОРМЫ ПРОФАЙЛА
const nameProfile = document.querySelector('#nameProfile');
const descriptionProfile = document.querySelector('#descriptionProfile');

//ПОПАД ДОБАВИТЬ КАРТОЧКУ
const editFormProfile = document.querySelector('#editFormProfile');
const popupOpenProfile = document.querySelector('#popupOpenProfile');
const popupCloseProfile = document.querySelector('#popupCloseProfile');

const editFormMesto = document.querySelector('#editFormMesto');
const buttonAddCard = document.querySelector('#buttonAddCard');
const popapCloseCard = document.querySelector('#popapCloseCard');

//ПОПАП ФОТО
const imagePopup = document.querySelector('#image-popup');
const imagePopupOpen = document.querySelectorAll('.card__foto');
const popapCloseFoto = document.querySelector('#popapCloseFoto');
const imagePopupFotoBig = document.querySelector('.image-popup__foto');
const imagePopupFotoText = document.querySelector('.image-popup__discription');



//Функция "больше фото" открыть
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
const buttonLike = document.querySelectorAll('.card__button-like');
buttonLike.forEach((item) => {
    item.addEventListener('click', function() {
        item.classList.toggle('card__button-like_active');
    });
});



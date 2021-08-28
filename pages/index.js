//ЭЛЕМЕНТЫ
//попап
const popapOpen = document.querySelector('.profile__edit-button');
const popapClose = document.getElementById('popapClose');
//формаПрофайл
const editForm = document.forms.editForm;
const nameEditForm = editForm.nameEditForm; //сокращенная запись
const descriptionEditForm = editForm.descriptionEditForm; //сокращенная запись

//кнопка формыПрофайл сохранить
const saveProfile = document.querySelector('#saveData');

//профайл
const nameProfile = document.querySelector('#nameProfile');
const descriptionProfile = document.querySelector('#descriptionProfile');

//buttonLike
const buttonLike = document.querySelectorAll('.card__button-like');
buttonLike.forEach((item) => {
    item.addEventListener('click', function() {
        item.classList.toggle('card__button-like_active');
    });
});


//ПОПАП
//Попап формыПрофайл открыть
popapOpen.addEventListener('click', function () {
    editForm.style.visibility = 'visible ';
});
//Попап формыПрофайл закрыть
popapClose.addEventListener('click', function () {
    editForm.style.visibility = 'hidden ';
});

//RENAME
function rename () {
    editForm.addEventListener('submit', function(event){
        event.preventDefault();
        nameProfile.innerHTML = nameEditForm.value;
        editForm.style.visibility = 'hidden ';
        });
    editForm.addEventListener('submit', function(){
        descriptionProfile.innerHTML = descriptionEditForm.value;
        editForm.style.visibility = 'hidden ';
    });
};

rename();
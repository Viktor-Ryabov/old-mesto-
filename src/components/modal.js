import { reloadPage, renameButton } from "./utils.js";
import {
    changeAvatarAPI,
    sendProfileDataToServer,
    getProfileName,
} from "./api.js";

const editFormProfile = document.querySelector("#editFormProfile");
const editFormMesto = document.querySelector("#editFormMesto");
const buttonSubmitProfile = document.querySelector("#saveData");
const buttonSubmitMesto = document.querySelector("#saveDataButton");
const formMesto = document.forms["editMesto"];
const formProfile = document.forms["editForm"];
const popups = document.querySelectorAll(".popup");
const buttonProfileOpen = document.querySelector("#popupOpenProfile");
const buttonMestoOpen = document.querySelector("#buttonAddCard");
const nameProfile = document.querySelector("#nameProfile");
const nameEditForm = document.querySelector("#nameEditForm");
const descriptionProfile = document.querySelector("#descriptionProfile");
const descriptionEditForm = document.querySelector("#descriptionEditForm");
const avatarKorolia = document.querySelector(".profile__avatar");
const changeAvatarPopup = document.querySelector("#changeAvatarPopup");
const avatarButton = document.querySelector("#avatarButton");
const avatarLinkToChange = document.querySelector("#linkAvatarFoto");
const saveAvatarButton = document.querySelector("#saveAvatarButton");
const formAvatar = document.forms["changeAvatarForm"];

function setProfileName() {
    getProfileName()
        .then((data) => {
            nameProfile.textContent = data.name;
            descriptionProfile.textContent = data.about;
            avatarKorolia.style.backgroundImage = `url(${data.avatar})`;
        })
        .catch(error => {
            console.log(`Error status: ${error.status}`)
        })
}
setProfileName();

buttonProfileOpen.addEventListener("click", function (event) {
    event.preventDefault();
    resetForm(formProfile, buttonSubmitProfile);
    nameEditForm.value = nameProfile.textContent.trim();
    descriptionEditForm.value = descriptionProfile.textContent.trim();
    openPopup(editFormProfile);
});

function changeProfileName() {
    nameProfile.textContent = nameEditForm.value;
    descriptionProfile.textContent = descriptionEditForm.value;
}

buttonMestoOpen.addEventListener("click", function (event) {
    event.preventDefault();
    resetForm(formMesto, buttonSubmitMesto);
    openPopup(editFormMesto);
});

let idCardToDelete
function setPopupOpenHandler(popupWindow, button, id) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        idCardToDelete = id;
        console.log(idCardToDelete);
        openPopup(popupWindow);
        return idCardToDelete;
    });
}

function setProfileSubmitHanlder() {
    editFormProfile.addEventListener("submit", function (event) {
        event.preventDefault();
        changeProfileName();
        sendProfileDataToServer(descriptionEditForm.value, nameEditForm.value)
        renameButton(editFormProfile, formProfile, document.querySelector("#saveData")) 
    });
}

function openPopup(popupWindow) {
    popupWindow.classList.add("popup_opened");
    document.addEventListener("keydown", closeByEscape);
}

function closePopup(popupWindow) {
    popupWindow.classList.remove("popup_opened");
    document.removeEventListener("keydown", closeByEscape);
}

function setPopupCloseHandler(popupWindow, button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        closePopup(popupWindow);
    });
}

popups.forEach((popupWindow) => {
    popupWindow.addEventListener("click", (event) => {
        if (event.target.classList.contains("popup_opened")) {
            closePopup(popupWindow);
        }
        if (event.target.classList.contains("popup__close-icon")) {
            closePopup(popupWindow);
        }
    });
});

function closeByEscape(event) {
    if (event.key === "Escape") {
        const openedPopup = document.querySelector(".popup_opened");
        closePopup(openedPopup);
    }
}

function resetForm(form, button) {
    form.reset();
    button.disabled = true;
}

avatarButton.addEventListener("click", function (event) {
    event.preventDefault();
    openPopup(changeAvatarPopup);
});

saveAvatarButton.addEventListener("click", function (event) {
    event.preventDefault();
    changeAvatarFoto()
    .then(data => {
        document.querySelector(".profile__avatar").style.backgroundImage = (`url("${data.avatar}")`)
    })
    .catch(error => {
        console.log(`Error status: ${error.status}`)
    })
    .finally(renameButton(changeAvatarPopup, formAvatar, saveAvatarButton))    
});

const changeAvatarFoto = () => {
    let avatarLink = avatarLinkToChange.value;
    return changeAvatarAPI(avatarLink)
};

export {
    openPopup,
    closePopup,
    resetForm,
    setPopupOpenHandler,
    setPopupCloseHandler,
    setProfileSubmitHanlder,
};
export {
    formMesto,
    formProfile,
    nameEditForm,
    descriptionEditForm,
    avatarKorolia,
    editFormMesto,
    idCardToDelete
};

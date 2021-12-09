import {
    getCardsAPI,
    deleteCardsAPI,
    putLikesAPI,
    deleteLikesAPI,
    addNewCadrsAPI,
    idUser
} from "./api.js";

import {
    setPopupOpenHandler,
    formMesto,
    openPopup,
    closePopup,
    resetForm,
    editFormMesto,
    idCardToDelete
} from "../components/modal.js";

import { reloadPage, renameButton } from "./utils.js";
import parseFloat from "core-js/fn/number/parse-float";

export {
    createCard,
    addCard,
    addCardsToPage,
    setLikeHandler,
    setDeleteCardHandler,
    imagePopup,
};

const saveDataButton = document.querySelector("#saveDataButton");
const imagePopup = document.querySelector("#image-popup");
const cardPlacesSection = document.querySelector(".places");
const deleteCardsPopup = document.querySelector("#deleteCardsPopup");
const confirmToDeleteButton = document.querySelector("#confirmToDeleteButton");
const editMesto = document.forms["editMesto"];
const cardButtonLike = document.querySelector("#card__button-like");

// function hideCardsLikes(likesBlock) {
//     likesBlock.classList.add("card__number-of-likes_no-likes");
// }
// function showCardsLikes(likesBlock) {
//     likesBlock.classList.remove("card__number-of-likes_no-likes");
// }

// function changeLikesVisability(likesBlock) {
//     if (likesBlock.textContent != 0) {
//         showCardsLikes(likesBlock);
//     } else {
//         hideCardsLikes(likesBlock);
//     }
// }

function createCard(name, link, likes) {
    const template = document.querySelector("#newCardTemplate").content;
    const card = template.cloneNode(true).querySelector(".card");
    card.querySelector(".card__title").textContent = name;
    card.querySelector("img").src = link;
    card.querySelector("img").alt = name;
    card.querySelector("#numberOfLikes").textContent = likes;
    setBigFotoHandler(card.querySelector(".card__foto"), imagePopup);
    setDeleteCardHandler(deleteCardsPopup, card.querySelector(".card__delete-button"));
    return card;
}

const setBigFotoHandler = (button, popup) => {
    button.addEventListener("click", function(event){
        event.preventDefault();
        setBigFotoData(button);
        openPopup(popup);
    });
}

const setBigFotoData = (button) => {
    document.querySelector(".popup__foto").src = button.src;
    document.querySelector(".popup__foto").alt = button.alt;
    document.querySelector(".popup__discription").textContent = button.alt;
}

function addCard(card) {
    cardPlacesSection.prepend(card);
}

function addCardsToPage() {
    getCardsAPI()
        .then((newCards) => {
            newCards.forEach(function (data) {
                const card = createCard(
                    data.name,
                    data.link,
                    data.likes.length
                )

                data.likes.forEach(function(like){
                    let id = like._id;

                    if (id == idUser) {
                        card.querySelector(".card__button-like").classList.add("card__button-like_active");
                    }
                });

                setLikeHandler(
                    card.querySelector(".card__button-like"),
                    data._id,
                    card.querySelector("#numberOfLikes"),
                    data.likes.length
                );

                // let userId;
                // getUserID()
                // .then(data => {
                //     const userId = data._id
                // })

                if (data.owner._id != idUser) {
                    card.querySelector(".card__delete-button").remove();
                } else {
                    setPopupOpenHandler(deleteCardsPopup, card.querySelector(".card__delete-button"), data._id)
                    deleteCardFromServer(confirmToDeleteButton, data._id, deleteCardsPopup);
                }
                addCard(card);
            });
        })
        // .catch(error => {
        //     console.log(`Error status: ${error.status}`)
        // })
}



function setLikeHandler(buttonLike, card_id = "", number = "", baseNumber = "") {
    buttonLike.addEventListener("click", function (event) {
        event.preventDefault();
        if (!buttonLike.classList.contains("card__button-like_active")) {
            buttonLike.classList.add("card__button-like_active");
            putLikesAPI(card_id);
            number.textContent = baseNumber + 1;
            baseNumber = Number(number.textContent);

        } else {
            buttonLike.classList.remove("card__button-like_active");
            deleteLikesAPI(card_id);
            number.textContent = Number(baseNumber - 1);
            baseNumber = Number(number.textContent);
        }
    });
}

function deleteCardFromServer(button, card_id, popup, card) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        console.log(card_id)
        deleteCardsAPI(card_id);
        closePopup(popup);
        // card.remove();
    });
}

function setDeleteCardHandler(popupWindow, deletButton) {
    deletButton.addEventListener("click", function (event) {
        event.preventDefault();
        openPopup(popupWindow);
        // card.remove();
    });
}
// function setNewCardsLikeHandler(likeButton) {
//     likeButton.addEventListener("click", function (event) {
//         event.preventDefault();
//         likeButton.classList.toggle("card__button-like_active");
//     });
// }


editFormMesto.addEventListener("submit", function (event) {
    event.preventDefault();
    const card = createCard(mestoName.value, linkFotoMesto.value);
    setDeleteCardHandler(card, card.querySelector(".card__delete-button"));
    // setNewCardsLikeHandler(card.querySelector(".card__button-like"));
    addCard(card);
    addNewCadrsAPI(mestoName.value, linkFotoMesto.value)
    .then(data => {
        setLikeHandler(card.querySelector(".card__button-like"), data._id, card.querySelector("#numberOfLikes"), data.likes.length)
    })
    renameButton(editFormMesto, editMesto, saveDataButton);
});

export { deleteCardFromServer, confirmToDeleteButton, deleteCardsPopup };
import {
    imagePopupFotoBig,
    imagePopupFotoText,
} from "../constants/dom-elements.js";

//Функция "большие фото" открыть
export function addInfoFoto(imageClick) {
    imageClick.addEventListener("click", function () {
        imagePopupFotoBig.src = imageClick.src;
        imagePopupFotoText.textContent = imageClick.alt;
    });
}

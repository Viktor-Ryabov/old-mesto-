import { 
    closePopup,
    resetForm
} from "./modal.js";

import { getUserInfo } from "./api.js"

const reloadPage = () => {

    setTimeout(function () {
        // location.reload();
    }, 500);
    // location.reload();
};
const renameButton = (popup, form, button) => {
    button.textContent = "Сохраняем...";
    setTimeout(function () {
        closePopup(popup);
        resetForm(form, button);
        button.textContent = "Сохранить";
    }, 500);
    // location.reload();
};

let userData = getUserInfo();
console.log(userData);


export { reloadPage, renameButton };

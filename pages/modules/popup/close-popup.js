export default function closePopup(popupWindow, button) {
    button.addEventListener("click", function () {
        popupWindow.classList.remove("popup_opened");
    });
}
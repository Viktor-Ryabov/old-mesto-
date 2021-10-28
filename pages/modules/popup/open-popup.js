export default function openPopup(popupWindow, button) {
    button.addEventListener("click", function () {
        popupWindow.classList.add("popup_opened");
    });
}
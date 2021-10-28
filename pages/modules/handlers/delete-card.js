//УДАЛЕНИЕ КАРТОЧКИ
export default function setDeleteCardHandler(card, deletButton) {
    deletButton.addEventListener("click", function () {
        card.remove();
    });
}

//ПЕРЕИМЕНОВАНИЕ
export default function rename() {
    editFormProfile.addEventListener("submit", function (event) {
        event.preventDefault();
        nameProfile.textContent = nameEditForm.value;
        descriptionProfile.textContent = descriptionEditForm.value;
        editFormProfile.classList.remove("popup_opened");
    });
}
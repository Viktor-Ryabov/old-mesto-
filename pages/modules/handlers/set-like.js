//Функция ЛАЙК
export default function setLikeHandler(buttonLike) {
    buttonLike.addEventListener("click", function () {
        buttonLike.classList.toggle("card__button-like_active");
    });
}
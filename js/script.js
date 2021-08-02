const modal = document.getElementById("modal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("header__modal__close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

const arrowBtn = document.getElementById("scroll_up");
arrowBtn.addEventListener('click', event => {
    const scroll = document.getElementById("content__mobile__block");
    if (scroll.className.match("content__mobile__block-active")) {
        arrowBtn.className = "content__mobile__block__arrow-up";
        scroll.className = "content__mobile__block";
    } else {
        arrowBtn.className += " content__mobile__block__arrow-up-active";
        scroll.className += " content__mobile__block-active";
    }
})

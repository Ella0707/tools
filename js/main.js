let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');
    }
};
select();


let searchBtn = document.querySelector(".header__btn-search");
let searchInput = document.querySelector(".header__input-search");
let searchWrap = document.querySelector(".header__search");

searchBtn.onclick = () => {
    searchBtn.classList.toggle('active');
    searchInput.classList.toggle('active');
    searchWrap.classList.toggle('active');
}


let headerMenuLink = [...document.getElementsByClassName("header__page-nav-item")];
for (let i = 0; i < headerMenuLink.length; i++) {
    headerMenuLink[i].addEventListener("click", function (e) {
        e.preventDefault();
        headerMenuLink.forEach(link => link.classList.remove("active"));
        this.classList.add("active");
    });
}


let mobBtn = document.querySelector(".btn-mobile");
let mobMenu = document.querySelector(".header__info-top");

mobBtn.onclick = () => {
    mobBtn.classList.toggle('active');
    mobMenu.classList.toggle('active');
}

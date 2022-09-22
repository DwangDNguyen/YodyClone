const menuOptions = document.querySelectorAll(".options");
const subMenus = document.querySelectorAll(".header-submenu");

menuOptions.forEach((option, index) => {
    const submenu = subMenus[index];
    option.onmouseover = function () {
        submenu.classList.add("active");
        document.querySelector(".modal-overlay").classList.add("active");
    };
    option.onmouseout = function (e) {
        submenu.classList.remove("active");
        document.querySelector(".modal-overlay").classList.remove("active");
    };
});

// slide
const imgsControll = document.querySelectorAll(".slider-img");
const thumbnails = document.querySelectorAll(".thumbnails");
const upBtn = document.querySelector(".top");
const downBtn = document.querySelector(".down");

imgsControll.forEach((img, index) => {
    const thumbnail = thumbnails[index];
    img.onmouseover = function () {
        document.querySelector(".main-img").src = thumbnail.src;
    };
});

upBtn.onclick = function () {
    document.querySelector(".slider").scrollTop -= 120;
};
downBtn.onclick = function () {
    document.querySelector(".slider").scrollTop += 120;
};

// scroll, scroll-to-top
const toTop = document.querySelector(".to-top");
window.onscroll = function () {
    document.querySelector(".header").classList.add("scroll");
    toTop.classList.add("to-top-active");
    if (window.pageYOffset === 0) {
        toTop.classList.remove("to-top-active");
    }
};

toTop.onclick = function () {
    document.body.scrollTop = 0;
};

//detail
const likeBtn = document.querySelector(
    ".container-content_product-detail-like"
);
likeBtn.onclick = function () {
    this.classList.toggle("liked");
};

const colorCates = document.querySelectorAll(".img-cate-color");
colorCates.forEach((cate, index) => {
    cate.onclick = function () {
        if (cate.querySelector(".disable") == null) {
            document
                .querySelector(".cate-color-select")
                .classList.remove("cate-color-select");
            this.classList.add("cate-color-select");
        }
    };
});

const sizeCates = document.querySelectorAll(".size-option");
const size = document.querySelector(".size");

sizeCates.forEach((sizeCate, index) => {
    sizeCate.onclick = function () {
        document.querySelector(".size-select").classList.remove("size-select");
        this.classList.add("size-select");
        size.innerText = this.innerText;
    };
});

const desc = document.querySelector(".desc");
const incr = document.querySelector(".incr");
const amount = document.querySelector(".amount");

let number = 1;

desc.onclick = function () {
    if (number > 1) {
        number--;
        amount.innerText = number;
    }
};
incr.onclick = function () {
    number++;
    amount.innerText = number;
};

const readDetail = document.querySelector(".read-detail");

readDetail.onclick = function () {
    this.classList.toggle("show");
    if (this.classList.contains("show")) {
        document.querySelector(".detail-more").style.display = "block";
    } else {
        document.querySelector(".detail-more").style.display = "none";
    }
};
// responsive
const tabMenus = document.querySelectorAll(".header-menu-tablet-items");

tabMenus.forEach((menu, index) => {
    menu.onclick = function () {
        document
            .querySelector(".active-menu-tablet")
            .classList.remove("active-menu-tablet");
        this.classList.add("active-menu-tablet");
    };
});
//slide mobile
var swiper = new Swiper(".slide-mobile", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    autoplay: {
        delay: 5000,
    },
});

var swiper2 = new Swiper(".swiper2", {
    slidesPerView: 7.4,
    centeredSlides: false,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var tabs = document.querySelector(".tabs-buttons .tabs-list");

var tabButtons = new Swiper(".tabs-buttons", {
    slidesPerView: "auto",
    freeMode: true,
    // scrollbar: '.swiper-scrollbar',
    mousewheelControl: true,
    onTap: function (swiper, event) {
        if (event.target.classList.contains("swiper-slide")) {
            tabContent.slideTo(swiper.clickedIndex);
        }
    },
});

var swiper3 = new Swiper(".mySwiper2", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    autoplay: {
        delay: 5000,
    },
    onSlideChangeStart: function (swiper, event) {
        tabs.children[swiper.previousIndex].classList.remove(
            "swiper-slide-active"
        );
        tabs.children[swiper.activeIndex].classList.add("active");
    },
});

// tab-active
const tabsItem = document.querySelectorAll(".tabs-item");
tabsItem.forEach((item) => {
    item.onclick = (e) => {
        document.querySelector(".tab-active").classList.remove("tab-active");
        e.target.classList.add("tab-active");
    };
});

//sub menu
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

//responsive tablet
const tabsTablet = document.querySelectorAll(".tab-container-items");
const tabActive = document.querySelector(".tab-container-active");
const line = document.querySelector(".line");
const contents = document.querySelectorAll(".tab-content-list");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabsTablet.forEach((tab, index) => {
    const content = contents[index];
    tab.onclick = function () {
        document
            .querySelector(".tab-container-active")
            .classList.remove("tab-container-active");
        document
            .querySelector(".tab-content-active")
            .classList.remove("tab-content-active");
        this.classList.add("tab-container-active");
        content.classList.add("tab-content-active");
        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";
    };
});

const tabMenus = document.querySelectorAll(".header-menu-tablet-items");

tabMenus.forEach((menu, index) => {
    menu.onclick = function () {
        document
            .querySelector(".active-menu-tablet")
            .classList.remove("active-menu-tablet");
        this.classList.add("active-menu-tablet");
    };
});

var SectionSwiper = new Swiper(".section-intro-products", {
    slidesPerView: 3,
    spaceBetween: 10,
});

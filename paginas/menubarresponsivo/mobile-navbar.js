class MobileNavbar{
    constructor(MobileMenu) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectoraAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind();
    }

    handleClick() {
        console.log(this);
        this.navList.classList.toggle(this.activeClass)
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar (
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();

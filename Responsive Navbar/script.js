function showMenu() {
    const className = "mobile-menu-visible";
    const mobileMenu = document.querySelector(".mobile-menu");
    if (mobileMenu.classList.contains(className)) {
        mobileMenu.classList.remove(className);
    } else {
        mobileMenu.classList.add(className);
    }
}
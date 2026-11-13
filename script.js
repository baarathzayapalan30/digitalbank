
// =====================================
// 1. SELECT HTML ELEMENTS
// =====================================

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");


// =====================================
// 2. MOBILE MENU FUNCTION
// =====================================

menuToggle.addEventListener("click", function () {

    // Toggle active class
    navLinks.classList.toggle("active");

    // Check whether menu is open
    const isOpen = navLinks.classList.contains("active");

    // Update accessibility state
    menuToggle.setAttribute("aria-expanded", isOpen);

    // Change menu icon
    if (isOpen) {

        menuToggle.innerHTML =
            '<img src="images/icon-close.svg" alt="">';

        menuToggle.setAttribute(
            "aria-label",
            "Close navigation menu"
        );

    } else {

        menuToggle.innerHTML =
            '<img src="images/icon-hamburger.svg" alt="">';

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    }

});


// =====================================
// 3. CLOSE MENU AFTER CLICKING A LINK
// =====================================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML =
            '<img src="images/icon-hamburger.svg" alt="">';

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    });

});


// =====================================
// 4. CLOSE MENU WHEN PRESSING ESCAPE
// =====================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.innerHTML =
            '<img src="images/icon-hamburger.svg" alt="">';

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    }

});

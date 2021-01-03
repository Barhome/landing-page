/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const navbarList = document.getElementById("navbar__list");
const sectionName = document.querySelectorAll(".section-name");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
window.addEventListener("load", function () {
  let navbarItems = "";
  sectionName.forEach(function (item, i) {
    navbarItems += `<li><a href="#section${i + 1}" class="menu__link">${
      item.innerHTML
    }</a></li>`;
  });
  navbarList.innerHTML = navbarItems;
});

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

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
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const section4 = document.getElementById("section4");
console.log(section1.getBoundingClientRect());
console.log(section2.getBoundingClientRect());
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// check if a section is in the viewport

isInView = function (element) {
  let boundries = element.getBoundingClientRect();
  return (
    boundries.top >= 0 &&
    boundries.left >= 0 &&
    boundries.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    boundries.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

// isOutView = function (element) {
//   let boundries = element.getBoundingClientRect();
//   if (boundries.bottom === 0) return true;
// };
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
document.addEventListener("scroll", function () {
  if (isInView(section1)) {
    setTimeout(function () {
      section1.classList.add("your-active-class");
      section2.classList.remove("your-active-class");
      section3.classList.remove("your-active-class");
      section4.classList.remove("your-active-class");
    }, 500);
  }
  if (isInView(section2)) {
    setTimeout(function () {
      section1.classList.remove("your-active-class");
      section2.classList.add("your-active-class");
      section3.classList.remove("your-active-class");
      section4.classList.remove("your-active-class");
    }, 500);
  }
  if (isInView(section3)) {
    setTimeout(function () {
      section1.classList.remove("your-active-class");
      section2.classList.remove("your-active-class");
      section3.classList.add("your-active-class");
      section4.classList.remove("your-active-class");
    }, 500);
  }
  if (isInView(section4)) {
    setTimeout(function () {
      section1.classList.remove("your-active-class");
      section2.classList.remove("your-active-class");
      section3.classList.remove("your-active-class");
      section4.classList.add("your-active-class");
    }, 500);
  }
});

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

import "./styles.css";
import createHomePage from "./home.js";
import createMenuPage from "./menu.js";
import createAboutPage from "./about.js";

const home = document.getElementById("home");
const menu = document.getElementById("menu");
const about = document.getElementById("about");
const content = document.getElementById("content");

// Tabbed browsing
function clearContent() {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

home.addEventListener("click", function () {
    clearContent();
    createHomePage();
})

menu.addEventListener("click", function () {
    clearContent();
    createMenuPage();
})

about.addEventListener("click", function () {
    clearContent();
    createAboutPage();
})

// Render home page on initial page load
createHomePage();

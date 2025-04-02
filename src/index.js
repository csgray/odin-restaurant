import "./styles.css";
import createHomePage from "./home.js";
import createMenuPage from "./menu.js";

const home = document.getElementById("home");
const menu = document.getElementById("menu");
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

// Render home page on initial page load
createHomePage();

import "./styles/global.css"
import "./styles/reset.css"
import { makeElement } from "./domHelper.js";
import { createHome } from "./home.js";

const body = document.querySelector("body");
const header = makeElement("div", "header");
const main = makeElement("div", "content");
const footer = makeElement("div", "footer");
const pageTitle = makeElement("h1", "pageTitle", "A Humble Restaurant, made with modules");
const navBar = makeElement("nav", "navBar")
const homeBtn = makeElement("button", "homeBtn", "Home");
const menuBtn = makeElement("button", "menuBtn", "Menu");
const aboutBtn = makeElement("button", "aboutBtn", "About");
const footerText = makeElement("div", "footerText", "Behold my incredible module prowess");
const footerText2 = makeElement("div", "footerText2","Please excuse my lack of styling");

body.append(header, main, footer);
header.append(pageTitle, navBar)
navBar.append(homeBtn, menuBtn, aboutBtn)
footer.append(footerText, footerText2);

homeBtn.addEventListener("click", () => {
  main.append(createHome());
})
import "./styles/global.css"
import { makeElement } from "./domHelper.js";

const body = document.querySelector("body");
const header = makeElement("div", "header");
const main = makeElement("div", "content");
const footer = makeElement("div", "footer");
const pageTitle = makeElement("h1", "pageTitle", "A Humble Restaurant, made with modules");
const navBar = makeElement("nav", "navBar")
const homeBtn = makeElement("button", "homeBtn", "Home");
const menuBtn = makeElement("button", "menuBtn", "Menu");
const aboutBtn = makeElement("button", "aboutBtn", "About");

body.append(header, main, footer);
header.append(pageTitle, navBar)
navBar.append(homeBtn, menuBtn, aboutBtn)
import { makeElement } from "./domHelper.js";
import "./styles/reset.css";
import "./styles/home.css";

export function createHome() {
  const openHours = [
    "Monday - 00:15 to 23:45",
    "Tuesday - 00:15 to 23:45",
    "Wednesday - 00:15 to 23:45",
    "Thursday - 00:15 to 23:45",
    "Friday - 00:15 to 23:45",
    "Saturday - 00:15 to 23:45",
    "Sunday - 00:15 to 23:45",
  ]

  const home = makeElement("div", "home");

  const intro = makeElement("section", "intro");
  const restName = makeElement("h2", "restName", "Restaurant Name Here");
  const tagLine = makeElement("div", "tagLine", "Food you won't forget, and an experience you'd like to");
  const image = makeElement("img", "image");

  const hours = makeElement("section", "hours");
  const hrTitle = makeElement("h3", "hrTitle","Hours of Operation");
  const hrList = makeElement("ul", "hrList");

  const location = makeElement("section", "location");
  const locTitle = makeElement("h3", "locTitle", "Location");
  const address = makeElement("address", "address");

  address.textContent = "Amesbury, Wiltshire, SP4 7DE, United Kingdom"

  intro.append(restName, tagLine, image);
  hours.append(hrTitle, hrList);
  location.append(locTitle, address);

  for (const day of openHours) {
    const schedule = makeElement("li", "schedule", day,);
    hrList.append(schedule);
  }

  home.append(intro, hours, location);

  return home;
}
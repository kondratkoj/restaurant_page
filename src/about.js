import { makeElement } from "./domHelper.js";
import "./styles/about.css";

export function createAbout() {
  const about = makeElement("section", "about");
  const textWall = makeElement("h4", "textWall", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt eius eos ullam natus! Sed quam asperiores ipsa maiores, quos fugit vel expedita vero aperiam ut cum dolores corporis, sequi molestias!");
  const title = makeElement("h2", "title", "About Us!");

  about.append(title, textWall);

  return about;
}
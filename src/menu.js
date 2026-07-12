import { makeElement } from "./domHelper.js";
import "./styles/menu.css";

const menuItems = [
  {
    name: "Backroad Burger",
    description: "A half-pound Angus beef burger with cheddar, lettuce, tomato, onions, and our signature Backroad sauce.",
    price: "$13.99",
  },
  {
    name: "Country Fried Chicken",
    description: "Crispy fried chicken breast served with seasoned fries and homemade coleslaw.",
    price: "$14.49",
  },
  {
    name: "Smoky BBQ Pulled Pork",
    description: "Slow-smoked pulled pork piled high on a toasted brioche bun with pickles and barbecue sauce.",
    price: "$12.99",
  },
  {
    name: "Garden Harvest Salad",
    description: "Fresh mixed greens topped with cucumbers, tomatoes, red onion, shredded cheese, and your choice of dressing.",
    price: "$10.99",
  },
  {
    name: "Homestyle Apple Pie",
    description: "Warm apple pie baked daily and served with a scoop of vanilla ice cream.",
    price: "$6.49",
  },
];

export function createMenu() {

  const menu = makeElement("section", "menu");

  for (const item of menuItems) {
    const tile = makeElement("div", "tile");
    const name = makeElement("h3", "name", item.name);
    const desc = makeElement("p", "desc", item.description);
    const price = makeElement("div", "price", item.price);

    tile.append(name, desc, price);

    menu.append(tile);
  }
  return menu;
}

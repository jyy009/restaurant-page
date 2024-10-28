import { menuItems } from "./menuItems";
import "./menu.css";

export const menu = () => {
  const menuTemplate = document.getElementById("menu-template");
  const menuSection = document.createElement("section");
  menuSection.classList.add("menu-section", "container");
  const content = document.querySelector("#content");
  const menuTitle = document.createElement("h2");
  menuTitle.classList.add("menu-header", "container")
  menuTitle.textContent = "Daily Menu";
  // menuSection.insertAdjacentElement("beforebegin", menuTitle);

  menuItems.forEach((item) => {
    const menuClone = menuTemplate.content.cloneNode(true);

    menuClone.querySelector(".item-name").textContent = item.name;
    menuClone.querySelector(".item-description").textContent = item.description;
    menuClone.querySelector(".item-price").textContent = item.price;

    
    menuSection.appendChild(menuClone);
  });

  // content.appendChild(menuTitle)
  content.appendChild(menuSection);
  content.insertBefore(menuTitle, menuSection)

};

import { menuItems } from "./menuItems";

export const menu = () => {
  const menuTemplate = document.getElementById("menu-template");

  menuItems.forEach(item => {
    const menuClone = menuTemplate.content.cloneNode(true);

    menuClone.querySelector(".item-name").textContent = item.name
    menuClone.querySelector(".item-description").textContent = item.description
    menuClone.querySelector(".item-price").textContent = item.price

    const content = document.querySelector("#content");
  content.appendChild(menuClone);
  })

  
};

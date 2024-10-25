export const menu = () => {
 
  const content = document.querySelector("#content");

  const menuSection = document.createElement("section");
  menuSection.classList.add("menu-section")
  content.appendChild(menuSection)

  const menuWrapper = document.createElement("div")
  menuWrapper.classList.add("menu-wrapper")
  menuSection.appendChild(menuWrapper)

  const menuItem = document.createElement("div")
  menuItem.classList.add("menu-item")
  menuWrapper.appendChild(menuItem)

  const itemName = document.createElement("h3")
  itemName.classList.add("item-name")
  itemName.textContent = "Porridge"
  
  
  const itemInfo = document.createElement("p")
  itemInfo.classList.add("item-info")
  itemInfo.textContent = "Fresh blueberries, oats, whipped cheese, fresh mint, agave."
  
  menuItem.appendChild(itemName)
  menuItem.appendChild(itemInfo)

  const itemPrice = document.createElement("p")
  itemPrice.classList.add("item-price")
  


}
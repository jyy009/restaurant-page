
import "./initialLoad.css"

export const initialLoad = () => {

  const homeTemplate = document.getElementById("home-template")
  const clone = homeTemplate.content.cloneNode(true)

  const content = document.querySelector("#content")  
  content.appendChild(clone)
  
}
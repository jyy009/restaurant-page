import seasideImage from "../public/images/seaside.jpg"

export const initialLoad = () => {

  const content = document.querySelector("#content");
  const section = document.createElement("section");
  section.classList.add("home-section")
  content.appendChild(section)

  const div = document.createElement("div");
  section.appendChild(div)
  div.classList.add("home-wrapper")


  const image = document.createElement("img");
  image.src = seasideImage
  image.classList.add("home-image")

  const heading = document.createElement("h1");
  heading.textContent = "Cliffside Cafe"
  heading.classList.add("home-heading")


  const para = document.createElement("p");
  para.textContent = "Unwind and enjoy good food with the most beautiful ocean view in San Diego"
  para.classList.add("home-info")

  div.appendChild(image)
  div.appendChild(heading)
  div.appendChild(para)
}
import "./main.css";
import { initialLoad } from "./initialLoad";
import { menu } from "./menu";

initialLoad();
const content = document.getElementById("content");

const homeButton = document.querySelector("#home-btn");
homeButton.addEventListener("click", () => {
  content.textContent = "";
  initialLoad(); 

});

const menuButton = document.querySelector("#menu-btn");
menuButton.addEventListener("click", () => {
  content.textContent = "";
  menu();
});

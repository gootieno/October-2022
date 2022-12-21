import { headerContainer, galleryContainer } from "./containers.js";
import { addDog, removeFirst, removeLast } from "./create-remove.js";

const initializePage = () => {
  headerContainer();
  galleryContainer();

  addDog();
  removeFirst();
  removeLast();
};

window.onload = initializePage;

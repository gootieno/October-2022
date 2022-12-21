export const headerContainer = () => {
  // create elements
  const section = document.createElement("section");
  const sectionHeading = document.createElement("h2");

  // style or set attributes
  section.setAttribute("class", "header");

  sectionHeading.innerText = "Dog Gallery";
  // append to a live dom element
  section.appendChild(sectionHeading);
  document.body.appendChild(section);

  buttonsContainer();
};

export const buttonsContainer = () => {
  const sectionContainer = document.querySelector(".header");

  const container = document.createElement("div");
  const addButton = document.createElement("button");
  const removeFirstButton = document.createElement("button");
  const removeLastButton = document.createElement("button");

  container.setAttribute("class", "buttons");

  addButton.setAttribute("id", "add");
  addButton.innerText = "Add Dog";

  removeFirstButton.setAttribute("id", "remove-first");
  removeFirstButton.innerText = "Remove First";

  removeLastButton.setAttribute("id", "remove-last");
  removeLastButton.innerText = "Remove Last";

  container.append(addButton, removeFirstButton, removeLastButton);
  sectionContainer.appendChild(container);
};

export const galleryContainer = () => {
  const section = document.createElement("section");
  const ulContainer = document.createElement("ul");

  section.setAttribute("class", "gallery");

  section.appendChild(ulContainer);
  document.body.appendChild(section);
  dogsList();
};

export const dogsList = (dogName = null, imageSrc = null) => {
  const dogListContainer = document.querySelector(".gallery > ul");

  const li = document.createElement("li");
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  const figCaption = document.createElement("figcaption");

  img.setAttribute(
    "src",
    imageSrc
      ? imageSrc
      : "https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg"
  );

  figCaption.innerText = dogName ? dogName : "hound-afghan";

  figure.append(img, figCaption);
  li.appendChild(figure);

  dogListContainer.appendChild(li);
};

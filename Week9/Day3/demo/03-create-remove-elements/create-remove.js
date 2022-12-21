/****************************** ADD DOG BUTTON ******************************/
import { dogsList } from "./containers.js";

export const addDog = () => {
  const add = document.getElementById("add");
  add.addEventListener("click", async () => {
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();

      //   console.log("this is adding a dog");
      const url = data.message; // URL of new dog image

      console.log("url from fetch ", url);

      const dogName = url.split("/")[4];
      console.log("dog name ", dogName);

      dogsList(dogName, url);
      /*--------------- Get breed (Hint: Parse from URL) ---------------- */
      // Your code here

      /*------------ Create new dog card with the url above ------------- */
      /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
      // Your code here

      /* Add the new dog card as a child to the ul in the .gallery element */
      // Your code here
    } catch (e) {
      console.log("Couldn't fetch dog :(");
    }
  });
};

/************************** REMOVE FIRST DOG BUTTON **************************/

export const removeFirst = () => {
  const removeFirst = document.getElementById("remove-first");
  removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    const firstDog = document.querySelector(".gallery > ul > li");

    if (firstDog) firstDog.remove();
    else alert("No Dogs Left :(");
    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
  });
};
/************************** REMOVE LAST DOG BUTTON ***************************/

export const removeLast = () => {
  const removeLast = document.getElementById("remove-last");
  removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here

    const allDogs = document.querySelectorAll("ul");
    if (allDogs.length) allDogs[allDogs.length - 1].remove();
    else alert("No Dogs Left :(");
  });
};

"use strict";
import { getData } from "./data.js";
const data = getData();

//VARIABLES
const main = document.querySelector(".main");

//Function to display all products
const displayProducts = function (arr) {
  arr.forEach((el) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.innerHTML = `
      <div class="product-img-container">
        <img class="product-img1" src=${el.image} alt="">
        <img class="product-img1" src=${el.image2} alt="">
      </div>
      <div class="product-info">
        <p class="product-name">${el.name}</p>
        <p class="product-detail">${el.style}, ${el.length}</p>
        <p class="product-price">${el.price}</p>
      </div>`;
    main.appendChild(cardDiv);
  });
};
displayProducts(data); //calling this function to display all dresses in the very beginning

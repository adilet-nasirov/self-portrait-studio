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

// //SORTING from HIGH TO LOW PRICE
// const displayHighToLowPrice = function (arr) {
//   const newArr = arr.sort(function (a, b) {
//     return b.price.substring(1) - a.price.substring(1);
//   });
//   // console.log(newArr);
// };

// //SORTING from LOW TO HIGH PRICE
// const displayHighToLowPrice = function (arr) {
//   const newArr = arr.sort(function (a, b) {
//     return a.price.substring(1) - b.price.substring(1);
//   });
//   // console.log(newArr);
// };

//sorting by NAME
// arr.sort(function (a, b) {
//   let nameA = a.name.toLowerCase();
//   let nameB = b.name.toLowerCase();
//   return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
// });

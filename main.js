"use strict";
import { getData } from "./data.js";
const data = getData();

//VARIABLES
const main = document.querySelector(".main");
const sortHighLow = document.querySelector("#sort-high-low");
const sortLowHigh = document.querySelector("#sort-low-high");
const sortAtoZ = document.querySelector("#sort-AtoZ");
const sortZtoA = document.querySelector("#sort-ZtoA");
const viewAllBtn = document.querySelector("#view-all");

const searchBtn = document.getElementById("search-btn");
const searchWrap = document.querySelector(".search-wrap");
const searchContainer = document.querySelector("#search-big-container");

const input = document.querySelector("#search-input");

//HELPER FUNCTIONS

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

//Function to clear the main from all products
const clearMain = function () {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
};

// display search input
const displaySearchInput = () => {
  searchWrap.style.display = "flex";
};
searchBtn.addEventListener("click", displaySearchInput);

//hide search input
document.onclick = function (e) {
  if (
    e.target.id != searchContainer.id &&
    e.target.id !== searchBtn.id &&
    e.target.id !== input.id
  )
    searchWrap.style.display = "none";
};



//SORTING from HIGH TO LOW PRICE
const displayHighToLowPrice = function (arr) {
  clearMain();
  const newArr = data.slice(0).sort(function (a, b) {
    return b.price.substring(1) - a.price.substring(1);
  });
  return displayProducts(newArr);
};
sortHighLow.addEventListener("click", displayHighToLowPrice);

//SORTING from LOW TO HIGH PRICE
const displayLowToHighPrice = function (arr) {
  clearMain();
  const newArr = data.slice(0).sort(function (a, b) {
    return a.price.substring(1) - b.price.substring(1);
  });
  return displayProducts(newArr);
};
sortLowHigh.addEventListener("click", displayLowToHighPrice);

//SORTING by NAME (A to Z)
const displayAtoZ = function (arr) {
  clearMain();
  const newArr = data.slice(0).sort(function (a, b) {
    let nameA = a.name.toLowerCase();
    let nameB = b.name.toLowerCase();
    return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
  });
  return displayProducts(newArr);
};
sortAtoZ.addEventListener("click", displayAtoZ);

//SORTING by NAME (Z to A)
const displayZtoA = function (arr) {
  clearMain();
  const newArr = data.slice(0).sort(function (a, b) {
    let nameA = a.name.toLowerCase();
    let nameB = b.name.toLowerCase();
    return nameA < nameB ? 1 : nameA > nameB ? -1 : 0;
  });
  return displayProducts(newArr);
};
sortZtoA.addEventListener("click", displayZtoA);

//VIEW ALL
// Function to view all products
const viewAll = function (arr) {
  clearMain();
  displayProducts(data);
};
viewAllBtn.addEventListener("click", viewAll);

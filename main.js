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
const searchResultsContainter = document.querySelector(".search-results");

const searchBar = document.querySelector("#search-bar");
const searchLinksContainer = document.querySelector(".search-links");
const searchLinksElements = document.querySelectorAll(".search-link");

//variables for displaying search result num
const searchResultNum = document.createElement("p");
searchResultNum.classList.add("search-result-number");

//-----------HELPER FUNCTIONS

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
//calling this function to display all dresses in the very beginning
displayProducts(data);

//function to clear the main from all products
const clearMain = function () {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
};

//function to clear the search results container from all products
const clearResultsContainer = function () {
  while (searchResultsContainter.firstChild) {
    searchResultsContainter.removeChild(searchResultsContainter.firstChild);
  }
};

//function to display search bar
const displaySearchBar = () => {
  searchWrap.style.display = "flex";
};
searchBtn.addEventListener("click", displaySearchBar);

//function to hide search input and to clear search results
document.onclick = function (e) {
  if (
    e.target.id != searchContainer.id &&
    e.target.id !== searchBtn.id &&
    e.target.id !== searchBar.id
  )
    searchWrap.style.display = "none";
  searchBar.value = "";
  searchResultNum.style.display = "none";
  clearResultsContainer();
};

//function to display an error message if there are no results
const showErrorMessage = function () {
  const errorMessage = document.createElement("p");
  errorMessage.classList.add("error-message");
  errorMessage.innerText = "No results found. Sorry!";
  searchResultsContainter.appendChild(errorMessage);
  setTimeout(() => searchResultsContainter.removeChild(errorMessage), 3000);
};

//Function to display search results
const displaySearchResults = function (arr, searchValue) {
  if (arr.length > 0) {
    arr.forEach((el) => {
      const searchCard = document.createElement("div");
      searchCard.classList.add("search-card");
      searchCard.innerHTML = `
        <div class="search-img-container">
          <img class="search-image" src=${el.image} alt="">
        </div>
        <div class="search-card-info">
          <p class="search-card-name">${el.name}</p>
          <p class="search-card-price">${el.price}</p>
        </div>`;
      searchResultsContainter.appendChild(searchCard);
    });
    searchResultNum.innerText = `${arr.length} Result(s) found for '${searchValue}'`;
    searchLinksContainer.appendChild(searchResultNum);
    searchResultNum.style.display = "block";
  }
  if (arr.length == 0) {
    showErrorMessage();
  }
};

//----------------MAIN FUNCTIONS

//////Searching by input value in search bar
function searchProducts(e) {
  clearResultsContainer();

  //creating a new array, which will hold products meeting the search input
  let filteredArray = [];
  // console.log(input);
  const searchInput = e.target.value.trim().toLowerCase().split(" ");
  console.log(searchInput);
  //looping through each element(dress) of the Data array and adding matching dresses to the new array
  if (searchInput.length > 0) {
    filteredArray = data.filter((el) => {
      return (
        el.name.toLowerCase().includes(searchInput) ||
        el.color.includes(searchInput) ||
        el.style.includes(searchInput) ||
        el.length.includes(searchInput)
      );
    });
    while (searchLinksContainer.firstChild) {
      searchLinksContainer.removeChild(searchLinksContainer.firstChild);
    }
    // displaying the objs(dresses) contained in the new array (objs containing the search input)
    displaySearchResults(filteredArray, searchInput);
  } else {
    clearResultsContainer();
    showErrorMessage();
  }
}
searchBar.addEventListener("change", searchProducts);

////////SORTING from HIGH TO LOW PRICE
const displayHighToLowPrice = function (arr) {
  clearMain();
  const newArr = data.slice(0).sort(function (a, b) {
    return b.price.substring(1) - a.price.substring(1);
  });
  return displayProducts(newArr);
};
sortHighLow.addEventListener("click", displayHighToLowPrice);

//////SORTING from LOW TO HIGH PRICE
const displayLowToHighPrice = function (arr) {
  clearMain();
  const newArr = data.slice(0).sort(function (a, b) {
    return a.price.substring(1) - b.price.substring(1);
  });
  return displayProducts(newArr);
};
sortLowHigh.addEventListener("click", displayLowToHighPrice);

//////SORTING by NAME (A to Z)
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

//////SORTING by NAME (Z to A)
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

//////VIEW ALL
// Function to view all products
const viewAll = function (arr) {
  clearMain();
  displayProducts(data);
};
viewAllBtn.addEventListener("click", viewAll);

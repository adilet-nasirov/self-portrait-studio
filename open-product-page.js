"use strict";
import { getData } from "./data.js";
const data = getData();

//VARIABLES
const main = document.querySelector(".product-container");

// export const saveClickedItem = (e) => {
//   const imgSrc = e.target.src;
//   // console.log(imgSrc);
//   const newArr = data.filter((el) => el.image2 === imgSrc);
//   //saved the new ARR in local storage
//   localStorage.setItem("clickedItem", JSON.stringify(newArr));
//   // console.log(newArr);
// };

const displayItem = () => {
  const item = JSON.parse(localStorage.getItem("clickedItem"));
  console.log(item[0]);
  // console.log(item[0].image);
  main.innerHTML = `
    <div class="product-main">
    <div class="img-container">
      <img src="${item[0].image}"/>
    </div>
    <div class="product-info">
      <div class="product-general-info">
        <h1>${item[0].name}</h1>
        <p>${item[0].price}</p>
      </div>
      <div class="product-details">
        <div class="product-description">
          <div>
            <p>${item[0].color}</p>
          </div>
          <div class="div">
            <p>${item[0].style}</p>
          </div>
          <div>
            <p>${item[0].length}</p>
          </div>
          <div>
            <p>US Size</p>
          </div>
          <div class="add-button">
            <a href="">ADD TO CART</a>
          </div>
        </div>
        <div class="product-delivery-info">
          <p>We expect to dispatch this item within 1-2 working days.</p>
          <p>All orders sent on a priority delivery service.</p>
          <a href="">Find out more — Contact Us</a>
          <a href="">See details</a>
        </div>
      </div>
    </div>
  </div>`;
};
displayItem();

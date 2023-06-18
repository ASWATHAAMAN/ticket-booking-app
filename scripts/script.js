`use strict`;

// select elements
const moviePriceEl = document.getElementById(`movie-price`);
const seatsEl = document.querySelectorAll(`.row .seats:not(.occupied)`);
console.log(seatsEl);
const countEl = document.getElementById(`count`);
const totalEl = document.getElementById(`total`);
// global variables
let price;
let seatCount;
let total;

// functions
function init() {}

// eventListeners
moviePriceEl.addEventListener(`change`, () => {
  price = Number(moviePriceEl.value);
  total = seatCount * price;
  totalEl.innerText = total;
  // console.log(price);
  // console.log(typeof price);
});

for (let i = 0; i < seatsEl.length; i = i + 1) {
  seatsEl[i].addEventListener(`click`, (Event) => {
    // if (Event.target.classList.contains(`selected`)) {
    //   Event.target.classList.remove(`selected`);
    // } else {
    //   Event.target.classList.add(`selected`);
    // }
    Event.target.classList.toggle(`selected`);

    seatCount = document.querySelectorAll(`.row .seats.selected`).length;
    countEl.innerText = seatCount;
    total = seatCount * price;
    totalEl.innerText = `₹ ${total}`;
  });
}

// initial settings
init();

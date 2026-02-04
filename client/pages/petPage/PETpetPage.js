console.log("This is the Pet Animal Page");

// Key: mps = money per second
// key: stats = attributes of pet
// Key: items = shop items to buy
let state = {
  mps: 1,
  items: [],
  stats: [],
  settings: [],
};

const image = document.querySelector("img");
const mpsDisplay = document.getElementById("mps");
const statsDisplay = document.getElementById("stats");
const shop = document.getElementById("shop");
let saveGame = document.getElementById("saveGame");

function game() {
  loadGame();
  setInterval(function () {
    saveGame();
    state.mps = state.mps + state.stats;
    mpsDisplay.innerText = state.mps;
    statsDisplay.innerText = state.stats;
  }, 1000);
}

image.addEventListener("click", function () {
  state.mps += 1;
  mpsDisplay.innerText = state.mps;
  console.log(state.mps);
});

// function loadGame() {
//   console.log(localStorage.getItem("state"));
//   if (localStorage.getItem("state") === null) {
//     return;
//   }
//   state = JSON.parse(localStorage.getItem("state"));
// }
// game();

// function resetGame() {
//   localStorage.clear();
//   state = {
//     stats: 0,
//     mps: 1,
//     items: [],
//   };
//   const resetButton = document.createElement("button");
//   resetButton.classList.add("reset-button");
//   resetButton.innerText = "Reset Game";

//   resetButton.addEventListener("click", resetGame);
// }

const item = [
  { itemName: "Bookstore", itemCost: 10, itemIncrease: 2 },
  { itemName: "Gym Membership", itemCost: 50, itemIncrease: 3 },
  { itemName: "Brew tea", itemCost: 100, itemIncrease: 5 },
  { itemName: "Movie tickets", itemCost: 150, itemIncrease: 10 },
];

function generateShop() {
  item.forEach(function (item) {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("shop-item");
    const itemName = document.createElement("p");
    itemName.innerText = item.itemName;
    const itemCost = document.createElement("p");
    itemCost.innerText = "Cost: " + item.itemCost;
    const itemIncrease = document.createElement("p");
    itemIncrease.innerText = "Increase: " + item.itemIncrease;
    const buyButton = document.createElement("button");
    buyButton.classList.add("buy-button");
    buyButton.innerText = "Buy";

    buyButton.addEventListener("click", function () {
      purchaseItem(item);
    });
    itemContainer.append(itemName, itemCost, itemIncrease, buyButton);
    shop.append(itemContainer);
  });
  console.log(item);

  const buyButton = document.createElement("button");
  buyButton.classList.add("buy-button");
  buyButton.innerText = "Buy";

  buyButton.addEventListener("click", function () {
    purchaseItem(items);
  });
}

generateShop();

let stats = [
  { statsKnowledge: "Knowledge", value: 0 },
  { statsHealth: "Health", value: 0 },
  { statsNutrition: "Nutrition", value: 0 },
  { statsHappiness: "Happiness", value: 0 },
];

function purchaseItem(itemParam) {
  if (itemParam.cost > state.mps) {
    alert("Not quite enough money to buy that yet.");
    return;
  }

  state.mps -= itemParam.cost;
  state.stats += itemParam.increase;
}

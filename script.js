let budgetTotal = document.querySelector(".budget-total");
let budgetForm = document.querySelector(".budget-form");
budgetForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(budgetForm);
    let budget = data.get("budget")
    console.log(budget);
    budgetTotal.innerHTML = `$${budget}`
    budgetForm.reset();
})


let purchasesForm = document.querySelector(".purchases-container");
let foodTotal = document.querySelector(".food-total");
let entertainmentTotal = document.querySelector(".entertainment-total");
let billsTotal = document.querySelector(".bills-total");
let clothesTotal = document.querySelector(".clothes-total");

let currentFood = 0;
let currentEntertainment = 0;
let currentBills = 0;
let currentClothes = 0;

purchasesForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(purchasesForm);
    let amount = Number(data.get("amount"));
    let category = data.get("category");

    console.log(amount, category)
    if (category == "food") {
        currentFood += amount;
        foodTotal.innerHTML = `$${currentFood}`
    } else if (category == "entertainment") {
        currentEntertainment += amount;
        entertainmentTotal.innerHTML = `$${currentEntertainment}`
    }
    else if (category == "bills") {
        currentBills += amount;
        billsTotal.innerHTML = `$${currentBills}`
    }
    else if (category == "clothes") {
        currentClothes += amount;
        clothesTotal.innerHTML = `$${currentClothes}`
    }
    purchasesForm.reset();
    console.log(amount);
})


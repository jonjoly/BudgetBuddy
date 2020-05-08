let budgetTotal = document.querySelector(".budget-total");
let budgetForm = document.querySelector(".budget-form");
let budget;

budgetForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(budgetForm);
    this.budget = Number(data.get("budget"));
    // console.log(budget);
    budgetTotal.innerHTML = `$${this.budget}`

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
let amount;


purchasesForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(purchasesForm);
    this.amount = Number(data.get("amount"));
    let category = data.get("category");

    // console.log(amount, category)

    if (category == "food") {
        currentFood += this.amount;
        foodTotal.innerHTML = `$${currentFood}`;
    } else if (category == "entertainment") {
        currentEntertainment += this.amount;
        entertainmentTotal.innerHTML = `$${currentEntertainment}`
    }
    else if (category == "bills") {
        currentBills += this.amount;
        billsTotal.innerHTML = `$${currentBills}`
    }
    else if (category == "clothes") {
        currentClothes += this.amount;
        clothesTotal.innerHTML = `$${currentClothes}`
    }
    this.budget -= this.amount;
    budgetTotal.innerHTML = `$${this.budget}`;
    purchasesForm.reset();
    // console.log(amount);
})
// const data = new FormData(budgetForm);
// let budget = data.get("budget")
// const purchaseData = new FormData(purchasesForm);
// let amount = Number(data.get("amount"));
// let currentBudget = 0;
// let formContainer = document.querySelector(".form-container");
// formContainer.addEventListener("click", (event) => {


//     if (budget > 0) {
//         currentBudget -= amount;
//         budgetTotal.innerHTML = `${currentBudget}`
//     } else if (budget <= 0) {
//         let popup = document.querySelector(".popup")
//         popup.style.display = "flex"
//     };

// })


// const budgetData=new formData(budgetForm);
//     this.budget=budgetData.get("budget")

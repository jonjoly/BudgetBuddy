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

purchasesForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(purchasesForm);
    let amount = data.get("amount");
    let category = data.get("category")

    console.log(amount, category)




    if (category == "food") {
        foodTotal.innerHTML = `$${amount}`
    } else if (category == "entertainment") {
        entertainmentTotal.innerHTML = `$${amount}`
    }
    else if (category == "bills") {
        billsTotal.innerHTML = `$${amount}`
    }
    else if (category == "clothes") {
        clothesTotal.innerHTML = `$${amount}`
    }
    purchasesForm.reset();
    console.log(amount);
})
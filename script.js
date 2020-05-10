let budgetTotal = document.querySelector(".budget-total");
let budgetForm = document.querySelector(".budget-form");
let budget = 0;

budgetForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(budgetForm);
    budget = Number(data.get("budget"));
    // console.log(budget);
    budgetTotal.innerHTML = `$${budget}`
    budgetForm.reset();
    budgetForm.style.display = "none"
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
let amount = 0;


purchasesForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(purchasesForm);
    amount = Number(data.get("amount"));
    let category = data.get("category");

    // console.log(amount, category)
    if (budget - amount >= 0 && category != "selected") {
        if (category == "food") {
            currentFood += amount;
            foodTotal.innerHTML = `$${currentFood}`;
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
        budget -= amount;
        budgetTotal.innerHTML = `$${budget}`;
        purchasesForm.reset();
    } else if (budget - amount >= 0 && category == "selected") {
        let popupTwo = document.querySelector(".popup-two")
        popupTwo.style.display = "flex"
        popupTwo.addEventListener("click", (e) => {
            popupTwo.style.display = "none"
        })
    } else {
        let popup = document.querySelector(".popup")
        popup.style.display = "flex"
    }
    let description = data.get("description")
    let items = document.createElement("li")
    let foodList = document.querySelector(".food")
    let enetertainmentList = document.querySelector(".entertainment")
    let billsList = document.querySelector(".bills")
    let clothesList = document.querySelector(".clothes")
    if (category == "food") {
        items.innerHTML = `${description} $${amount}`
        console.log(items)
        foodList.append(items)
    } else if (category == "entertainment") {
        items.innerHTML = `${description} $${amount}`
        console.log(items)
        enetertainmentList.append(items)
    }
    else if (category == "bills") {
        items.innerHTML = `${description} $${amount}`
        console.log(items)
        billsList.append(items)
    }
    else if (category == "clothes") {
        items.innerHTML = `${description} $${amount}`
        console.log(items)
        clothesList.append(items)
    }

})

let popup = document.querySelector(".popup")
popup.addEventListener("click", (e) => {
    popup.style.display = "none"
})


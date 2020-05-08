let budgetTotal = document.querySelector(".budget-total");
let budgetForm = document.querySelector(".budget-form");
let startTotal = 0;
budgetForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(budgetForm);
    let budget = data.get("budget")
    console.log(budget);
    budgetTotal.innerHTML = `$${budget}`
    budgetForm.reset();
})

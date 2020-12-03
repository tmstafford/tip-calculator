let buttonEl = document.getElementById('submit');
let resultsEl = document.getElementById('results');
let tipAmountEl = document.getElementById('tipAmount');
let billTotalEl = document.getElementById('totalBill');

function calculateTip() {
    let bill = Number(document.getElementById('billAmount').value);
    let tip = document.getElementById('tipPercent').value;

    let tipValue = bill * tip;
    let totalBill = (bill + tipValue).toFixed(2);
    let fixedTip = tipValue.toFixed(2);
    console.log(fixedTip);
    console.log(totalBill);

    resultsEl.style.display = "flex";
    tipAmountEl.textContent = "$" + fixedTip;
    billTotalEl.textContent = "$" + totalBill;
};

buttonEl.addEventListener("click", function(event) {
    event.preventDefault();
    calculateTip();
});
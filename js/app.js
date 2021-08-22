document.getElementById('deposite-button').addEventListener('click', function () {
    const inputDeposite = document.getElementById('deposite-input');
    const inputAmountText = inputDeposite.value;
    const newInputAmountText = parseFloat(inputAmountText);


    const dipositeTotal = document.getElementById('depotite-total');
    const previousAmount = dipositeTotal.innerText;
    const newPreviousAmount = parseFloat(previousAmount);
    const totalAmount = newPreviousAmount + newInputAmountText;
    dipositeTotal.innerText = totalAmount;
    inputDeposite.value = '';

    const totalBalance = document.getElementById('balance-total');
    const previousbalance = totalBalance.innerText;
    const newPreviousbalance = parseFloat(previousbalance);
    const newBalanceTotal = newPreviousbalance + newInputAmountText;
    totalBalance.innerText = newBalanceTotal;
})
document.getElementById('withdraw-button').addEventListener('click', function () {
    const widthdrawInput = document.getElementById('withdraw-input');
    const widthdrawinputText = widthdrawInput.value;
    const newWidthdrawInput = parseFloat(widthdrawinputText);

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmount = withdrawTotal.innerText;
    const newPreviousWithdrawAmount = parseFloat(previousWithdrawAmount);
    const withdrawtotal = newPreviousWithdrawAmount + newWidthdrawInput;
    withdrawTotal.innerText = withdrawtotal;


    const totalBalance = document.getElementById('balance-total');
    const previousbalance = totalBalance.innerText;
    const newPreviousbalance = parseFloat(previousbalance);
    const newBalanceTotal = newPreviousbalance - newWidthdrawInput;
    totalBalance.innerText = newBalanceTotal;
    widthdrawInput.value = '';



})


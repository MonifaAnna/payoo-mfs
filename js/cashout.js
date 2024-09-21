
// cash out
document.getElementById('cash-moneyBtn').addEventListener('click', function (event) {
    event.preventDefault();
    const cashOutMoney = document.getElementById('money-cashout').value;
    const pinNumberCash = document.getElementById('pin2').value;
    const mainBalanceCash = document.getElementById('main-balance');
    // convert number
    const convertCashOut = parseFloat(cashOutMoney);
    const convertMainBalance = parseFloat(mainBalanceCash.innerText);
    const pinCode = '2021'

    if (pinNumberCash === pinCode) {
        const newBalance = convertMainBalance - convertCashOut;
        
        //set value
        mainBalanceCash.innerText = newBalance
    } else {
        alert('pincode wrong')
    }
    
    
})

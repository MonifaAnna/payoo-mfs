

// step-1
document.getElementById('add-moneyBtn').addEventListener('click', function (event) {
    event.preventDefault();
    // step-2
    const pinNumber = document.getElementById('pin').value;
    const addMoney = document.getElementById('money-add').value;
    const convertAddMoney = parseInt(addMoney);
    const mainBalance = document.getElementById('main-balance');
    const convertMainBalance = parseInt(mainBalance.innerText);
    const pin = '2021';

    if (pinNumber === pin) {
        const currentBalance = convertAddMoney + convertMainBalance;
        mainBalance.innerText = currentBalance;
    } else {
        alert('wrong info')
    }
    
});

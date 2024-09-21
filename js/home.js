
// add money
// step-1
document.getElementById('add-moneyBtn').addEventListener('click', function (event) {
    event.preventDefault();
    // step-2
    const pinNumber = document.getElementById('pin').value;
    const addMoney = document.getElementById('money-add').value;
    const convertAddMoney = parseInt(addMoney);
    // step-3
    const mainBalance = document.getElementById('main-balance');
    const convertMainBalance = parseInt(mainBalance.innerText);
    const pin = '2021';
    //step-4
    if (pinNumber === pin) {
        const currentBalance = convertAddMoney + convertMainBalance;
        console.log(currentBalance);
        
        mainBalance.innerText = currentBalance;
    } else {
        alert('Wrong Pin Code! Try Again')
    }
    
});


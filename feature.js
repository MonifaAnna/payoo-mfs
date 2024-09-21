

// show the cashout section and hide the add money section

document.getElementById('cashout').addEventListener('click', function () {
    // remove the hidden class
    document.getElementById('cashout-form').classList.remove('hidden');
      // add the hidden class
    document.getElementById('addmoney').classList.add('hidden')
    
});

// show the add money section and hide the cashout section

document.getElementById('add-money').addEventListener('click', function () {
       // remove the hidden class
    document.getElementById('addmoney').classList.remove('hidden');
       // add the hidden class
    document.getElementById('cashout-form').classList.add('hidden');
    
});
//



// step-1 set event handler
document.getElementById('main-btn').addEventListener('click', function (event) {
    //step-2: prevent default behavior (reloading browser stop)
    event.preventDefault();//<----bejal----->

    // step-3 get the phone number and password

    const phoneNumber = document.getElementById('phone-number').value;
    const passwordPin = document.getElementById('password').value;

        // step 4
    if (passwordPin === 'monifa' && phoneNumber === '01601698202') {
        window.location.href = './home.html'
      
        
    } else {
        alert('Wrong Info! Please try again with right info')
    }


  
});
document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
   
    //password 
    const passwordlField = document.getElementById('user-password');
    const userPassword = passwordlField.value;
    // console.log(userPassword);
    if (userEmail == 'nurulamin@gmail.com' && userPassword == 'nurul') {
        
        window.location.href = 'bankingSystem.html';


    }
})
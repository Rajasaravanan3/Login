function validate(){
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    if(validUserName(email)==true&&validPassword(password)==true){
        alert(`LoggedIn successfully`);
    }
    else if(!validUserName(email)){
        alert(`invalid EmailID`);
    }

}
function validUserName(email){
    if(email.length==0){
        console.log(`Enter an email Id`)
        return false;
    }
    var regEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (regEx.test(email) == false) 
    {
        //console.log(`${regEx}+" "+${username}`);
        return false;
    }
    console.log(`valid email Id`)
    return true;
}
function validPassword(password){
    if(password.length<6){
        alert(`Enter atleast eight characters as password`);
        return false;
    }
    if(/[a-z]/.test(password)==false){
        alert(`Password should have atleast one Lowercase letter`);
        return false;
    }
    if(/[A-Z]/.test(password)==false){
        alert(`Password should have atleast one Uppercase letter`)
        return false;
    }
    if(/[0-9]/.test(password)==false){
        alert(`Password should have atleast one Numeric value`)
        return false;
    }
    if(/[~/!/@/#/$/%/^/&/+/-/*]/.test(password)==false){
        alert(`Password should have atleast one special character`)
        return false;
    }
    console.log(`valid password`);
    return true;
}
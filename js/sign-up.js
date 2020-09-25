var signUpUrl = 'http://localhost:8080/api/v1/signup';

function signup(firstName,lastName,email,password,mobile){
    event.preventDefault();

    var signUpParams = {
        "email_address": email.value,
        "first_name": firstName.value,
        "last_name": lastName.value,
        "mobile_number": mobile.value,
        "password": password.value
      };
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST',signUpUrl);
    xhr.setRequestHeader('Content-Type','application/json;charset=UTF-8');
    xhr.send(JSON.stringify(signUpParams));
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 201){
            console.log(xhr.responseText);
            window.location.assign('./login.html');
        }
    };
}

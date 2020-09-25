var loginUrl = 'http://localhost:8080/api/v1/auth/login';

function doLogin(username,password){
    event.preventDefault();//this is deprecated dont use later
    //console.log(event);
    console.log(event.target);
    console.log(username);
    console.log(password);
    var loginInfo =  'Basic ' + window.btoa(username.value + ':'  + password.value);
    console.log(loginInfo);
    var xhr = new XMLHttpRequest();
    xhr.open('POST',loginUrl);
    xhr.setRequestHeader('Content-Type','application/json;charset=UTF-8');
    xhr.setRequestHeader('authorization',loginInfo);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            console.log(xhr.responseText);
           // console.log(window.location.host);
            //console.log(window.location.hostname);
           //window.location.assign('../index.html');
           //window.open("../index.html");
           console.log(xhr.getResponseHeader('access-token'));
           sessionStorage.setItem('user-detail',xhr.responseText);
           sessionStorage.setItem('access-token',xhr.getResponseHeader('access-token'));
           window.location.href="../index.html";
        }
    };
}
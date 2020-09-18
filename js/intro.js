//window.alert("JS INTO SECTION");

function sum(x,y){
    return x + y;
}

function multiply(x,y){
    return x + y;
}

function testVars(){
    var a = 2;
    var b = true;
    var c = 'jenkins frontend';
    var d = null;
    var e;
    var f = {'ci':'jenkins','iac':'ansible'};
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
}

console.log('sum is ' + sum(2,3));
testVars();

//type coercion examples
function testTypeCoercion(){
    console.log(4 + "hello");
    console.log(2 + 3 + "hello");
    console.log(true + "hello");
    console.log(1 + "hello" + 2);
    console.log(5 + true);
    console.log("5" * "2"); //10
    console.log(5 + null);
    console.log(true + 5);
    console.log(+ "123");//unary operator on string converts into number
}

testTypeCoercion();

function varEquality(){
    console.log(123 == 123);
    console.log(123 == "123");
    console.log(123 === "123");
    console.log(null == 0);//false
    console.log(0 == null);//false
    console.log(0 == false);//true
    console.log(null === 0);//false        
}

varEquality();
//console.log(0 == null); false type coercion doesnt happen in this case 
console.log(String(null));//"null" string
console.log(Number(null)); //0 valued number

function testSwitch(){
    console.log((22 % 2) === 0);
    var flag = (22 % 2) === 0;
    switch((19 % 2) === 0){
        case true:
            console.log("even");
            break;
        case false:
            console.log("odd");
            break;
    }
}

function testifelse(){
    var day = new Date().getDay();
    console.log(day);
    if(day == 1){
        console.log("monday");
    }
    else if(day == 2){
        console.log("tuesday");
    }
    else{
        console.log("else");
    }
}

testifelse();

function testTernaryop(){
    var likesMusic = false;
    likesMusic ? console.log("Play music"):console.log("Watch film");
}

testTernaryop();

var text = "";
console.log(text.length);
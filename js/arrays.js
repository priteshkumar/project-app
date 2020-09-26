var citools = ["jenkins","docker","aws"];
console.log(citools.length);
console.log(citools[0]);
citools.push("ansible");
console.log(citools);
citools.unshift("chef");
console.log(citools);
console.log(citools.shift());
console.log(citools.slice(1,3));
console.log(citools);
console.log(citools.splice(1,2));
console.log(citools);
citools.push("docker");
citools.push("chef");
console.log(citools);
citools.splice(2);
console.log(citools);


function testArray(){
    var test = [1,2,3];
    return test;
}

var a = testArray();
console.log(a);
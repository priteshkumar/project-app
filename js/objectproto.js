/**
 * demo object prototype code
 */

function testObjects(){
    var ciConfig = {
        "ci" : "jenkins",
        "vcs" : "git",
        "iac" : "ansible",
        "cloudplatform" : {
            "name" :"aws",
            "services" : ["ec2","iam","s3","vpc"]
        }
    }

    console.log(ciConfig.ci);
    console.log(ciConfig["iac"]);
    console.log(ciConfig["cloudplatform"]["name"]);
    ciConfig["cloudplatform"]["container"] = "docker";
    console.log(ciConfig.cloudplatform);
}

testObjects();

function testObjectLoop(){
    var mydata = {
        "name":"mavixk",
        "job" : "software qa intern"
    }
    console.log("iterate k,v of mydata object");
    for(k in mydata){
        console.log(k + " : "  + mydata[k]);
    }
}

testObjectLoop();

function testObjectProto(){
    var mydata = {
        "name":"mavixk",
        "desgination" : "software backend intern",
        "address" : "1 way,terrence"
    }
    
    var ref = mydata; //reference to mydata, any change in either is transparent to both
    ref.address = "2 way,terrence";
    console.log(mydata.address);
    console.log(mydata.hasOwnProperty("name"));            
    
}

testObjectProto();
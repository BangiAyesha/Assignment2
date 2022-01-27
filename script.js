function valid(){
    var name = document.getElementById("name").value
    var mob = document.getElementById("mob").value
    var email = document.getElementById("email").value
    var feedback = document.getElementById("feedb").value

    var expName = /^[a-zA-z]{2,100}$/;
    var expMob = /^[7-9][0-9]{9}$/;
    var expEmail = /^[a-zA-Z0-9.]+@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)*$/;
    var expFeedb = /^[a-a-zA-Z0-9]{20,200}$/;


    if(!(expName.test(name))){
        document.getElementById("name1").innerHTML = "Enter Valid Name"
    }
    else if(!(expMob.test(mob))){
        document.getElementById("mob1").innerHTML = "Enter valid mobile number"
    }
    else if(!(expEmail.test(email))){
        document.getElementById("email1").innerHTML = "Enter valid Email"
    }
    // else if(!(expFeedb(feedback))){
    //     document.getElementById("feedb1").innerHTML =  "Enter characters between 2-200"
    // }
    else{
        alert("Form Submitted")
    }

}
// function alert(){
//     alert("MyFunction");
// }
function validation(){
    let name = document.querySelector("#fname").value;
    let phone = document.querySelector("#lname").value;
    let email = document.querySelector("#mail").value;
    let message = document.querySelector("#subject").value;
    //let submit = document.querySelector("#submit");
    let error_message = document.querySelector("#error_message");
    let messageSuccess = document.querySelector("#message_success");
    //let messageSuccess = "Form Submitted Successfully!";
    let text;

    error_message.style.padding = "10px";
    error_message.style.color = "red";
    messageSuccess.style.padding = "10px";
    messageSuccess.style.color = "green";
    
    // alert(name); 

    //submit.addEventListener("click", function(event){
    //    event.preventDefault();
    // });

    if(name.length < 6){
        text = "Please Enter Valid Name";
        error_message.innerHTML = text;
        console.log(name);
        return false;
        
    }

    if(isNaN(phone) || phone.length !=10){
        text = "Please Enter Valid Number";
        error_message.innerHTML = text;
        console.log(phone);
        return false;
        
    }

    if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter Valid Email";
        error_message.innerHTML = text;
        console.log(email);
        return false;
        
    }

    if(message.length <= 10){
        text = "Please write me somthing!";
        error_message.innerHTML = text;
        return false;
    }

    error_message.innerHTML = " ";

    //alert("Form Submitted Successfully!");
    //return true;

    messageSuccess.innerHTML = "Form Submitted Successfully!";
    return false;



}
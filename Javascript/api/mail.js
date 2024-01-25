function sendMessage(event){
    event.preventDefault();
    (function(){
        emailjs.init("CwYeRPRHo3tj-_pKx");
    })();
    var serviceID = "service_iasx6ms";
    var templateID = "template_hp7y0ms";

    var Params = {
        name : document.getElementById('name').value,
        mail: document.getElementById('email').value,
        message: document.getElementById('message').value
    }
    emailjs.send(serviceID , templateID , Params).then(res => {
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";
        // alert("hayirli olson baba");
        document.getElementById('wf-form-Contact').style = "display: none;" 
        document.getElementById('sucsessful').style = "display: block;" 
    }).catch();
};
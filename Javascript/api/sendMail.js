function sendMail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "mintcontactservice@gmail.com",
        Password : "",
        To : 'melihtakyacib@gmail.com',
        From : document.getElementById('email').value,
        Subject : "New Contact Form Enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
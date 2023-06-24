(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('YOUR_PUBLIC_KEY');
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contact_form', this)
            .then(function() {
                console.log('SUCCESS!');
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}


function sendEmail(){
  Email.send({
      Host : "smtp.elasticemail.com",
      Username : "intesarulhaquey4@gmail.com",
      Password : "82B1ED0AFEE3C043527E2A10EC43E34A140C",
      To : 'intesarul15-2170@diu.edu.bd',
      From : document.getElementById('email').value,
      Subject : document.getElementById('subject').value,
      Body : document.getElementById('message').value
  }).then(
    message => alert(message)
  );
}

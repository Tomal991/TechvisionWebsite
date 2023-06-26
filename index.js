let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "intesarulhaquey4@gmail.com",
        Password : "82B1ED0AFEE3C043527E2A10EC43E34A140C",
        To : 'intesarul15-2170@diu.edu.bd',
        From : document.getElementById('email').value,
        Subject : document.getElementById('subject').value,
        Body : 'Name:'+ document.getElementById('name').value
         + '<br> phone:'+ document.getElementById('phone').value
         + '<br> message:'+ document.getElementById('message').value
         + '<br> address:'+ document.getElementById('address').value
    }).then(
      message => alert(message)
    );
  }
  
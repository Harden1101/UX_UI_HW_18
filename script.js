/*

Trying to setup Work cards rearange. this works but
I can not remove the hover state since its pseudoclasses?

const CardSep = document.querySelector('.bck_img_cards');

CardSep.addEventListener('click', () => {
    CardSep.classList.add('bck_img_cards_active');
    

})

*/

$(".navbar-nav .nav-link").on('click', function () {
    $(".navbar-toggler").click(); // Simulate a click on the navbar-toggler button
  });

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        const requiredFields = document.querySelectorAll('.required-field');

        if (form.getAttribute('data-submitted') === 'true') {
            requiredFields.forEach(function (field) {
                if (!field.checkValidity()) {
                    field.classList.add('invalid');
                    event.preventDefault();
                } else {
                    field.classList.remove('invalid');
                }
            });
        } else {
            // Set the data-submitted attribute to true when the form is submitted for the first time
            form.setAttribute('data-submitted', 'true');
        }
    });
});






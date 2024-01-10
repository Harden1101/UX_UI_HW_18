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


// changing my bck link for mobile or desktop protp //

function updateLinkDestination() {
    var link = document.getElementById('BCK_proto_site');

    if (window.innerWidth < 768) {
        // Change the destination for screens below 768px
        link.href = 'https://www.figma.com/proto/dT5NzUkXYuWhPhJ87lGACZ/BCK-Hi-Fi-mobile?type=design&node-id=377-4475&t=YessHETsnQuUvH9F-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=377%3A4475&mode=design';
    } else {
        // Keep the original destination for screens wider than 768px
        link.href = 'https://www.figma.com/proto/FHJuD7GEA3pkUOiK6u7A49/BCK-Hi-fi-Desktop?type=design&node-id=1793-53790&t=as3dO6d2D8bnFQJL-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1793%3A53790&mode=design';
    }
}

// Initial call to set the link destination based on the initial screen width
updateLinkDestination();

// Listen for window resize events to update the link destination dynamically
window.addEventListener('resize', updateLinkDestination);




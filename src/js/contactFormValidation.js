$(function() {
    $('#contactForm').validate({
        rules: {
            firstName: {
                required: true
            },
            lastName: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages: {
            firstName: {
                required: "Please enter your first name!"
            },
            lastName: {
                required: "Please enter your last name!"
            },
            message: {
                required: "Please enter your message!"
            }
        },
        submitHandler: function() {
            $('#contactFormOnSuccess').removeClass('hide').html("<strong>Thank You</strong><br/> We will get back to you soon");
            $('#contactForm').trigger('reset');
            $('html, body').animate({
                scrollTop: $('#contactForm').offset().top
            }, 1000);
        }
    });
});

$('#contactForm').on('keyup change paste', 'input, textarea', function() {
    $('#contactFormOnSuccess').addClass('hide').html("");
});

$('#contactFormSubmit').click(function() {
    $('#contactFormOnSuccess').addClass('hide').html("");
});

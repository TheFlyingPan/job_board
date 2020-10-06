$(document).ready(function () {
    $('#submit-btn').click(function () {
        // code fragment
        var data = {
            service_id: 'service_uu9cssf',
            template_id: 'template_35yyska',
            user_id: 'user_6QvVhBke9FeQLhvZ8Igvw',
            template_params: {
                "destination": "aurepoir00@gmail.com",
                "from_name": "bonsoir",
                "to_name": "crottet",
                "message": "bonsoiriririririr",
            }
        };

        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function () {
                alert('Your mail is sent!');
                data = {
                    "candidate_first": $('input#firstName').val(),
                    "candidate_last": $('input#lastName').val(),
                    "email": $('input#email').val(),
                    "phone": $('input#phone').val(),
                    "message": $('textarea#message').val(),
                    "candidate_id": 0,
                    "ad_id": $('input#ad_id').val(),
                }
                $.ajax({
                    url: "http://localhost:3000/createApp",
                    type: "POST",
                    data: data,
                    success: function () {
                        window.location.href = "./index.html?apply=true";
                    },
                })
            },
            error: function (error) {
                alert('Oops... ' + JSON.stringify(error));
            },
        })
    })
})
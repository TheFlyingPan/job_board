$(document).ready(function() {
    $('#submit-btn').click(function() {
        data = {
            "email": $('input#email-input').val(),
            "password": $('input#password-input').val(),
        }
        $.ajax({
            url: "http://localhost:3000/register",
            type: "POST",
            data: data,
            success: function(msg) {
                
            }
        })
    })
})
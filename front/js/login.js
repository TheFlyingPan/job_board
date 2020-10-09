$(document).ready(function() {
    $('#submit-btn').click(function() {
        var data = {
            "email": $('input#email-input').val(),
            "password": $('input#password-input').val(),
        }
        $.ajax({
            url: "http://localhost:3000/login",
            type: "POST",
            data: data,
            success: function (msg) {
                console.log(msg)
            },
            error: function (xhr, status, error) {
                console.log(JSON.parse(xhr.responseText))
            }
        })
        return false
    })
})
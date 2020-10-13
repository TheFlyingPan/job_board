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
                window.location.href = "./index.php?id=" + JSON.parse(msg).id;
            },
            error: function (xhr, status, error) {
                msg = JSON.parse(xhr.responseText)
                if (msg.message == "Wrong password") {
                    $("#pass-input-div input").addClass("is-invalid");
                    $("#pass-input-div input").val("");
                    $("#pass-input-div").append('<div class="invalid-feedback">Sorry, wrong password. Try another?</div>')
                } else if (msg.message == "Account unknow, please register") {
                    $("#email-input-div input").addClass("is-invalid");
                    $("#email-input-div input").val("");
                    $("#pass-input-div input").val("");
                    $("#email-input-div").append("<div class=\"invalid-feedback\">Email doesn't exist, please try another one or register</div>")
                }
            }
        })
        return false
    })
})
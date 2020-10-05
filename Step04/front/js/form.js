$(document).ready(function () {
    $('#submit-btn').click(function () {
        data = {
            "candidate_first": $('input#firstName').val(),
            "candidate_last": $('input#lastName').val(),
            "email": $('input#email').val(),
            "phone": $('input#phone').val(),
            "message": $('input#message').val(),
            "candidate_id": 0,
            "ad_id": $('input#ad_id').val(),
        }
        $.ajax({
            url: "http://localhost:3000/createApp",
            type: "POST",
            data: data,
            success: function() {
                window.location.href = "./index.html?apply=true";
            },

        })
    })
});
$(document).ready(function () {
    var gogo;
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/people/",
        data: { "uid": getCookie('uid') },
        success: function (_data) {
            var data = JSON.parse(_data)
            setTable(data);
        }
    });
    function setTable(data) {
        $('#submit-btn').click(function () {
            form_data = {
                "candidate_first": data[0].firstName,
                "candidate_last": data[0].lastName,
                "email": data[0].email,
                "phone": data[0].phone,
                "message": $("textarea#message").val(),
                "candidate_id": getCookie('uid'),
                "ad_id": $("input#ad_id").val(),
            }
            console.log(form_data)
            $.ajax({
                url: "http://localhost:3000/createApp/",
                type: "POST",
                data: form_data,
                success: function () {
                    window.location.href = "./index.php?apply=true";
                },
                error: function (xhr, status, error) {
                    msg = JSON.parse(xhr.responseText)
                    if (msg.message == "Email already in use") {
                        console.log('prout');
                    }
                }
            })
        })
    }
})

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
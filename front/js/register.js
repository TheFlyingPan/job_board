$(document).ready(function () {
    $('input[name=optionsRadios]').change(function () {
        if (this.value == 'recruiter') {
            $('button#submit-btn').before("<div class=\"form-group\" id=\"company-name\"><label for=\"companyName\">Company name</label><input type=\"text\" class=\"form-control\" id=\"companyName\" placeholder=\"Enter your company's name\" required></div>")
        }
        else if (this.value == 'looking') {
            $('#company-name').remove();
        }
    });
    $('#submit-btn').click(function () {
        data = {
            "firstName": $('input#firstName').val(),
            "lastName": $('input#lastName').val(),
            "applying": $('input[name=optionsRadios]:checked').val() == "looking" ? true : false,
            "company_name": $('input#companyName').val(),
            "email": $('input#email-input').val(),
            "password": $('input#password-input').val(),
        }
        $.ajax({
            url: "http://localhost:3000/register",
            type: "POST",
            data: data,
            success: function (msg) {
                window.location.href = "./login.php";
            },
            error: function (xhr, status, error) {
                console.log(JSON.parse(xhr.responseText))
            }
        })
        return false
    })
})
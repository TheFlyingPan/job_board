$(document).ready(function() {
    console.log(getCookie('uid'))
    $.ajax({
        type: "POST",
        url: "http://localhost:3000/people/",
        data: { "uid": getCookie('uid') },
        success: function (data) {
            var data = JSON.parse(data)
            console.log(data)
            $('#submit-btn').click(function () {
                form_data = {
                    "candidate_first": data.candidateFirst,
                    "candidate_last": data.candidateLast,
                    "email": data.email,
                    "phone": data.phone,
                    "message": $('textarea#message').val(),
                    "candidate_id": "'" + getCookie('uid') + "'",
                    "ad_id": $('input#ad_id').val(),
                }
                $.ajax({
                    url: "http://localhost:3000/createApp",
                    type: "POST",
                    data: data,
                    success: function () {
                        window.location.href = "./index.php?apply=true";
                    },
                })
            })
        }
    });
})

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
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
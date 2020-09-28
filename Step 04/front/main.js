$(document).ready(function() {
    $.ajax({
        url: "http://localhost:3000/ad/",
        type: "GET",
        success: function(data) {
            $("#ladescription").html(JSON.parse(data)[0].content)
        }
    })
})
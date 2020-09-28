$(document).ready(function() {
    $.ajax({
        url: "http://localhost:3000/ad/",
        type: "GET",
        success: function(data) {
            displayAds(JSON.parse(data));
        }
    })
})
$(document).ready(function () {
    $.ajax({
        url: "http://localhost:3000/ad/",
        type: "GET",
        success: function (data) {
            displayAds(JSON.parse(data));
        }
    })
    if ($_GET('apply') == "true") {
        console.log("bonsoir")
        $('body nav').after("<div class=\"alert alert-dismissible alert-success mt-1 ml-4 mr-4\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button><strong>It's in their hands now!</strong> You successfully applied to an ad</div>")
    }
})

function $_GET(param) {
    var vars = {};
    window.location.href.replace(location.hash, '').replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
        function (m, key, value) { // callback
            vars[key] = value !== undefined ? value : '';
        }
    );

    if (param) {
        return vars[param] ? vars[param] : null;
    }
    return vars;
}
$(document).ready(function () {
    if ($_GET('apply') == "true") {
        console.log("bonsoir")
        $('body nav').after("<div class=\"alert alert-dismissible alert-success mt-1 ml-4 mr-4\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button><strong>It's in their hands now!</strong> You successfully applied to an ad</div>")
    }
    if ($_GET('id') != "" && $_GET('id') != "null") {
        console.log("bonsoir")
        document.cookie = "uid=" + $_GET('id') + "; path=/; expires=5000000";
    }
    $.ajax({
        url: "http://localhost:3000/ad/",
        type: "GET",
        success: function (data) {
            displayAds(JSON.parse(data), getCookie('uid') != "" ? getCookie('uid') : 0);
        }
    })
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
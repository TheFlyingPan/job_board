$(document).ready(function () {
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
    if (getCookie("uid") != null && getCookie("uid") != "null") {
        $("#navbarColor01").append("<ul class=\"nav navbar-nav navbar-right\"><li><a href=\"./index.php?logout=true\" id=\"sign-out\"><span class=\"glyphicon glyphicon-user\"></span>Sign out</a></li></ul>")
    } else {
        $("#navbarColor01").append("<ul class=\"nav navbar-nav navbar-right\"><li><a href=\"./register.php\"> Sign Up</a></li><li><a href=\"./login.php\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li></ul>")
    }
})

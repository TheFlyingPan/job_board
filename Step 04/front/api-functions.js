 function displayAds(data) {
    var count = 0;
    data.forEach((element, index) => {
        var card = $("<div class=\"card text-white bg-primary mb-3 mt-3\"></div>");
        var header = $("<div class=\"card-header\"></div>").text(element.company);
        var body = $("<div class=\"card-body\"></div>");
        var title = $("<h5 class=\"card-title\"></h5>").text(element.title);
        var shortDesc = $("<p class=\"card-text lead\"></p>").text(element.content.slice(0, 50));
        var collapse = $("<div class=\"collapse\" id=\"collapseExample" + index + "\"></div>").append($("<div class=\"card card-body mb-2\" id=\"ladescription\"></div>").text(element.content));
        var button = $("<a class=\"btn btn-secondary\" data-toggle=\"collapse\" href=\"#collapseExample" + index + "\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">Learn more</a>")

        getCompanyName(element.company);

        body = body.append(title, shortDesc, collapse, button);
        card = card.append(header, body);
        $("main .card-deck").append(card);
    });
}

function getCompanyName(id) {
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/company/" + id,
        success: function (response) {
            console.log(reponse[0])
        }
    });
}
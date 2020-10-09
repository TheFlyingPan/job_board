function displayAds(data, uid) {
    var count = 0;
    var ix = 0;

    data.forEach((element, index) => {
        var card = $("<div class=\"card text-white bg-primary mb-3 mt-3\"></div>");
        var header = $("<div class=\"card-header\"></div>").text(element.company_name);
        var body = $("<div class=\"card-body\"></div>");
        var title = $("<h5 class=\"card-title\"></h5>").text(element.title);
        var shortDesc = $("<p class=\"card-text lead\"></p>").text(element.content.slice(0, 50) + "...");
        var collapse = $("<div class=\"collapse\" id=\"collapseExample" + index + "\"></div>").append($("<div class=\"card card-body mb-2\" id=\"ladescription\"></div>").text(element.content));
        if (uid == 0) {
            var button = $("<a class=\"btn btn-secondary\" data-toggle=\"collapse\" href=\"#collapseExample" + index + "\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">Learn more</a><form action=\"./form.php\" method=\"post\" class=\"mt-2\"><input type=\"hidden\" value=\"" + element.id + "\" name=\"ad_id\"><input type=\"hidden\" value=\"" + element.company_name + "\" name=\"company\"><input type=\"hidden\" value=\"" + element.title + "\" name=\"title\"><button type=\"submit\" class=\"btn btn-secondary\">Apply</button></form>")
        } else {
            var button = $("<a class=\"btn btn-secondary\" data-toggle=\"collapse\" href=\"#collapseExample" + index + "\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">Learn more</a><form action=\"./logged-form.php\" method=\"post\" class=\"mt-2\"><input type=\"hidden\" value=\"" + element.id + "\" name=\"ad_id\"><input type=\"hidden\" value=\"" + element.company_name + "\" name=\"company\"><input type=\"hidden\" value=\"" + element.title + "\" name=\"title\"><input type=\"hidden\" value=\"" + uid + "\" name=\"uid\"><button type=\"submit\" class=\"btn btn-secondary\">Apply</button></form>")
        }

        body = body.append(title, shortDesc, collapse, button);
        card = card.append(header, body);
        var deck = $("main #number" + ix);
        if (count > 1) {
            ix++
            var deck = $("<div class=\"card-deck ml-3 mr-3\" id=\"number" + ix + "\"></div>");
            deck = deck.append(card);
            $("main").append(deck);
            count = 0;
        } else {
            $("main #number" + ix).append(card);
            count++;
        }
    });
}
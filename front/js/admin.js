$(document).ready(function() {
    $.ajax({
        url: "http://localhost:3000/ad/",
        type: "GET",
        success: function(data) {
            introduitAd(JSON.parse(data))
        }
    })
    $.ajax({
        url: "http://localhost:3000/applications/",
        type: "GET",
        success: function(data) {
            console.log(JSON.parse(data))
            introduitApp(JSON.parse(data))
        }
    })
    $.ajax({
        url: "http://localhost:3000/people/",
        type: "GET",
        success: function(data) {
            console.log(JSON.parse(data))
            introduitPeople(JSON.parse(data))
        }
    })
})

function introduitAd(data) {
    data.forEach(element => {
        $("tbody#ad").append("<tr><td>" + element.id + "</td>  <td>" + element.title + "</td>  <td>" + element.author + "</td>  <td>" + element.content + "</td>  <td>" + element.company_name + "</td></tr>")
    });
}

function introduitApp(data) {
    data.forEach(element => {
        $("tbody#app").append("<tr><td>" + element.id + "</td>  <td>" + element.candidate_id + "</td>  <td>" + element.candidate_last + "</td>  <td>" + element.candidate_first + "</td>  <td>" + element.contact_phone + "</td><td>" + element.contact_email + "</td><td>" + element.message + "</td></tr>")
    });
}

function introduitPeople(data) {
    data.forEach(element => {
        $("tbody#people").append("<tr><td>" + element.id + "</td>  <td>" + element.candidate_id + "</td>  <td>" + element.company_name + "</td>  <td>" + element.lastName + "</td>  <td>" + element.firstName + "</td><td>" + element.applying + "</td><td>" + element.email + "</td><td>" + element.password + "</td></tr>")
    });
}
module.exports = function (app, con, faker) {
    faker.locale = "en"
    app.get('/new_ads', (req, res) => {
        var sql = "INSERT INTO advertisements (title, author, content, company, company_name, createdAt, beginsAt, expiresAt) VALUES ('" + faker.name.jobTitle() + "', '" + faker.name.findName() + "', '" + faker.lorem.paragraphs(2) + "', 1, '" + faker.company.companyName() + "', 56, 2, 23)";
        con.query(sql, function (err, result) {
            if (err) throw err;
            res.send("une nouvelle annonce est apparu sur votre site");
        });
    })
    app.get('/slug', (req, res) => {
        console.log(faker.random.uuid())
    })
}
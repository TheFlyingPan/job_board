<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="./img/running.png" />
    <title>JobBoard</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="./js/admin.js"></script>
    <script src="./js/nav-login.js"></script>
    <link rel="stylesheet" href="./css/style.css">
</head>
<?php
if ($_COOKIE['uid'] == "400e0310-d5b4-4b21-8071-4831054c87c9") {
?>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="./index.php">JobBoard</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="./index.php">Home <span class="sr-only">(current)</span></a>
                </li>
            </ul>
        </div>
    </nav>
    <main class="mr-3 ml-3">
        <h3 class="mt-3">Advertisements table</h3>
        <table class="table table-hover mb-5">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Content</th>
                    <th scope="col">Company name</th>
                </tr>
            </thead>
            <tbody id="ad">
            </tbody>
        </table>
        <h3 class="mt-3">Application table</h3>
        <table class="table table-hover mb-5">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Candidate id</th>
                    <th scope="col">Last name</th>
                    <th scope="col">First name</th>
                    <th scope="col">Phone (if specified)</th>
                    <th scope="col">Email</th>
                    <th scope="col">Message</th>
                </tr>
            </thead>
            <tbody id="app">

            </tbody>
        </table>
        <h3 class="mt-3">People table</h3>
        <table class="table table-hover mb-5">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Candidate id</th>
                    <th scope="col">Company name (if any)</th>
                    <th scope="col">Last name</th>
                    <th scope="col">First name</th>
                    <th scope="col">Applying</th>
                    <th scope="col">Email</th>
                    <th scope="col">Hashed password</th>
                </tr>
            </thead>
            <tbody id="people">

            </tbody>
        </table>
        <h3 class="mt-3">Companies table</h3>
        <table class="table table-hover mb-5">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">City</th>
                    <th scope="col">Country</th>
                    <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody id="company">

            </tbody>
        </table>
    </main>
</body>
<?php
} else {
?>
<h1 class="mt-6 ml-7">Move along, nothing to see here...</h1>
<?php
    http_response_code(404);
}
?>
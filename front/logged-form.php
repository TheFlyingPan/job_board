<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="./img/running.png" />
    <title>JobBoard</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./css/style.css">
    <script src="./js/logged-form.js"></script>
</head>

<body>
    <?php
    if (isset($_POST['ad_id'])) {
        $id = $_POST['ad_id'];
        $title = $_POST['title'];
        $company = $_POST['company'];
        $uid = $_POST['uid'];
    }
    ?>

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="./index.php">JobBoard</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Company</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
        </div>
    </nav>
    <h2 class="ml-3 mt-4 mb-3">Application to <?= $title ?> at <?= $company ?></h1>
        <div class="w-60">
            <form class="mr-3 ml-3 p-3">
                <div class="form-group">
                    <label for="message">Enter a message for the recruiter</label>
                    <textarea class="form-control" id="message" rows="3" style="margin-top: 0px; margin-bottom: 0px; height: 104px;" placeholder="Enter your message here..." required></textarea>
                </div>
                <input type="hidden" value="<?= $id ?>" id="ad_id">
                <button type="submit" class="btn btn-primary" id="submit-btn">Apply</button>
            </form>
        </div>
</body>

</html>
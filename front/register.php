<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" type="image/png" href="./img/running.png" />
    <title>JobBoard</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="./js/register.js"></script>
    <link rel="stylesheet" href="./css/style.css">
</head>

<body>
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
    <main>
        <form class="ml-4 mr-4 mt-3">
            <div class="form-group">
                <label for="firstName">First name</label>
                <input type="text" class="form-control" id="firstName" placeholder="Enter your first name" required>
            </div>
            <div class="form-group">
                <label for="lastName">Last name</label>
                <input type="text" class="form-control" id="lastName" placeholder="Enter your last name" required>
            </div>
            <fieldset class="form-group" id="">
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios1" value="looking" checked="">
                        I'm looking for a job
                    </label>
                </div>
                <div class="form-check">
                    <label class="form-check-label">
                        <input type="radio" class="form-check-input" name="optionsRadios" id="optionsRadios2" value="recruiter">
                        I'm an employer looking for new profiles
                    </label>
                </div>
            </fieldset>
            <div class="form-group">
                <label for="email-input">Email address</label>
                <input type="email" class="form-control" id="email-input" placeholder="Enter your email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="password-input">Password</label>
                <input type="text" class="form-control" id="password-input" placeholder="Enter your password">
            </div>
            <button type="submit" class="btn btn-primary" id="submit-btn">Submit</button>
        </form>
    </main>
</body>

</html>
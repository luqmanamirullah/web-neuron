<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>403 Forbidden</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header bg-danger text-white">
                        <h5 class="mb-0">403 Forbidden</h5>
                    </div>
                    <div class="card-body">
                        <p class="lead">Sorry, you do not have permission to access this page.</p>
                        <a href="{{ route('adminpanel') }}" class="btn btn-primary">Return to dashboard</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>

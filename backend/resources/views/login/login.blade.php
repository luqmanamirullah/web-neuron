<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>AdminLTE 3 | Log in</title>

    <!-- favicon -->
    <link rel="icon" href="/img/logo/logo.png" type="image/x-icon">

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">

    <link rel="stylesheet" href="{{ asset('AdminLTE/plugins/fontawesome-free/css/all.min.css') }}">

    <link rel="stylesheet" href="{{ asset('AdminLTE/plugins/icheck-bootstrap/icheck-bootstrap.min.css') }}">

    <link rel="stylesheet" href="{{ asset('AdminLTE/dist/css/adminlte.min.css?v=3.2.0') }}">
</head>
<body class="hold-transition login-page">
    <div class="login-box">
    <div class="login-logo">
        <h1><b>Login</b></h1>
    </div>
    @if(session('success'))
        <div id="success-message" class="alert alert-success">
            {{ session('success') }}
        </div>
        @endif
    <div class="card">
        <div class="card-body login-card-body">
        <p class="login-box-msg">Sign in to start your session</p>

        @if(session('error'))
        <div id="flash-message" class="alert alert-danger">
            {{ session('error') }}
        </div>
        @endif

        <form action="{{ route('postlogin') }}" method="post">
            {{ csrf_field() }}
            <div class="input-group mb-3">
                <input type="email" class="form-control" name="email" id="email" placeholder="Email">
                <div class="input-group-append">
                    <div class="input-group-text">
                        <span class="fas fa-envelope"></span>
                    </div>
                </div>
            </div>
            <div class="input-group mb-3">
                <input type="password" class="form-control" name="password" id="password" placeholder="Password">
                    <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-lock"></span>
                        </div>
                    </div>
                </div>
            <div class="row">
                <div class="col-8">
                    <div class="icheck-primary">
                        <p class="mb-0">
                            <a href="{{ route('password.request') }}" class="text-center">Forget password?</a>
                        </p>
                    </div>
                </div>
                <div class="col-4">
                    <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                </div>

            </div>
            </form>
        </div>
    </div>
    
    </div>
    <script src="{{ asset('AdminLTE/plugins/jquery/jquery.min.js') }}"></script>

    <script src="{{ asset('AdminLTE/plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>

    <script src="{{ asset('AdminLTE/dist/js/adminlte.min.js?v=3.2.0') }}"></script>
    <script>
        // Function to hide an element by its ID after a specified time
        function hideElementById(elementId, timeout) {
            var element = document.getElementById(elementId);
            if (element) {
                setTimeout(function() {
                    element.style.display = 'none';
                }, timeout);
            }
        }

        // Hide the "flash-message" element after 5 seconds
        hideElementById('flash-message', 5000);

        // Hide the "success-message" element after 5 seconds if it exists
        hideElementById('success-message', 5000);
    </script>
</body>
</html>
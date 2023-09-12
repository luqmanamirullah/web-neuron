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
    <script nonce="ada7c336-b76e-4845-b1b9-7b101a49e04a">(function (w, d) { !function (db, dc, dd, de) { db[dd] = db[dd] || {}; db[dd].executed = []; db.zaraz = { deferred: [], listeners: [] }; db.zaraz.q = []; db.zaraz.f = function (df) { return async function () { var dg = Array.prototype.slice.call(arguments); db.zaraz.q.push({ m: df, a: dg }) } }; for (const dh of ["track", "set", "debug"]) db.zaraz[dh] = db.zaraz._f(dh); db.zaraz.init = () => { var di = dc.getElementsByTagName(de)[0], dj = dc.createElement(de), dk = dc.getElementsByTagName("title")[0]; dk && (db[dd].t = dc.getElementsByTagName("title")[0].text); db[dd].x = Math.random(); db[dd].w = db.screen.width; db[dd].h = db.screen.height; db[dd].j = db.innerHeight; db[dd].e = db.innerWidth; db[dd].l = db.location.href; db[dd].r = dc.referrer; db[dd].k = db.screen.colorDepth; db[dd].n = dc.characterSet; db[dd].o = (new Date).getTimezoneOffset(); if (db.dataLayer) for (const dp of Object.entries(Object.entries(dataLayer).reduce(((dq, dr) => ({ ...dq[1], ...dr[1] })), {}))) zaraz.set(dp[0], dp[1], { scope: "page" }); db[dd].q = []; for (; db.zaraz.q.length;) { const ds = db.zaraz.q.shift(); db[dd].q.push(ds) } dj.defer = !0; for (const dt of [localStorage, sessionStorage]) Object.keys(dt || {}).filter((dv => dv.startsWith("_zaraz"))).forEach((du => { try { db[dd]["z_" + du.slice(7)] = JSON.parse(dt.getItem(du)) } catch { db[dd]["z_" + du.slice(7)] = dt.getItem(du) } })); dj.referrerPolicy = "origin"; dj.src = "/cdn-cgi/zaraz/s.js?z=" + btoa(encodeURIComponent(JSON.stringify(db[dd]))); di.parentNode.insertBefore(dj, di) };["complete", "interactive"].includes(dc.readyState) ? zaraz.init() : db.addEventListener("DOMContentLoaded", zaraz.init) }(w, d, "zarazData", "script"); })(window, document);</script>
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
                <input type="email" class="form-control" name="email" placeholder="Email">
                <div class="input-group-append">
                    <div class="input-group-text">
                        <span class="fas fa-envelope"></span>
                    </div>
                </div>
            </div>
            <div class="input-group mb-3">
                <input type="password" class="form-control" name="password" placeholder="Password">
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
        setTimeout(function() {
            document.getElementById('flash-message').style.display = 'none';
        }, 5000); // Menghilangkan pesan flash setelah 5 detik (5000 milidetik)

        // Ambil elemen pesan sukses
        var successMessage = document.getElementById('success-message');

        // Cek apakah pesan sukses ada
        if (successMessage) {
            // Setelah 5 detik, sembunyikan pesan sukses
            setTimeout(function() {
                successMessage.style.display = 'none';
            }, 5000); // 5000 milidetik = 5 detik
        }
    </script>
</body>
</html>
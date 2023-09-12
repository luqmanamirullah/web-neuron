  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    @yield('content')
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  <script>
    setTimeout(function() {
        document.getElementById('flash-message').style.display = 'none';
    }, 5000); // Menghilangkan pesan flash setelah 5 detik (5000 milidetik)
  </script>
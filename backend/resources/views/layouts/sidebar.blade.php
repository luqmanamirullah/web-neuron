<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="{{ route('adminpanel') }}" class="brand-link">
      <img src="{{ Asset('/img/logo/logo.png') }}" alt="AdminLTE Logo" class="brand-image img-circle" style="opacity: .8">
      <span class="brand-text font-weight-light">Neuronworks</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mb-2">
        <div class="info">
          <a href="#" class="d-block mt-2">{{ Auth::user()->firstname }} {{ Auth::user()->lastname }}</a>
        </div>
      </div>

      <!-- SidebarSearch Form -->
      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
                with font-awesome or any other icon font library -->

          <li class="nav-item" id="dashboard">
            <a href="{{ route('adminpanel') }}" class="nav-link hover">
            <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
              </p>
            </a>
          </li>
          <li class="nav-item" id="blog">
            <a href="{{ route('blog') }}" class="nav-link">
            <i class="nav-icon fas fa-newspaper"></i>
              <p>
                Blog
              </p>
            </a>
          </li>
          <li class="nav-item" id="pages">
            <a href="#" class="nav-link">
            <i class="nav-icon fas fa-th"></i>
              <p>
                Pages
              </p>
            </a>
          </li>
          <li class="nav-item" id="career">
            <a href="{{ route('career') }}" class="nav-link">
            <i class="nav-icon fas fa-house-user"></i>
              <p>
                Career
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-copy"></i>
              <p>
                Service
                <i class="fas fa-angle-left right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item" id="service">
                <a href="{{ route('service') }}" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Services</p>
                </a>
              </li>
              <li class="nav-item" id="portofolio">
                <a href="{{ route('portofolio') }}" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Portofolio</p>
                </a>
              </li>
            </ul>
          </li>
          @if(Auth::user()->role_id === 1) <!-- Check if user role is superadmin -->
          <li class="nav-item" id="user">
            <a href="{{ route('user') }}" class="nav-link">
            <i class="nav-icon fas fa-user"></i>
              <p>
                User
              </p>
            </a>
          </li>
          @endif

          <!-- Setting -->
          <li class="nav-header">ACCOUNT</li>
            <li class="nav-item" id="changePassword">
              <a href="{{ route('change-password') }}" class="nav-link">
                  <i class="nav-icon fas fa-key"></i>
                  <p>
                      Change Password
                  </p>
              </a>
            </li>
            <li class="nav-item" id="logout">
              <a href="{{ route('logout') }}" class="nav-link">
                <i class="nav-icon fas fa-sign-out-alt"></i>
                <p>
                  Logout
                </p>
              </a>
            </li>
          </li>
        </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
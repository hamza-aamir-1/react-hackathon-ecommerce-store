import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg px-4 py-1">
  <div className="container-fluid">
    <a className="navbar-brand navbar_brand" href="#">
        <img src="favicon.png" className='pe-2' width='40px' alt="" />
        ECOM
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body mx-lg-auto">
        <ul className="navbar-nav justify-content-end flex-grow-1">
          <li className="nav-item">
            <a className="nav-link nav_link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link nav_link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Pages
            </a>
            <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link nav_link" href="#">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
    <div className='d-flex align-items-center'>
        <div>
            <a className='navbar_icons me-4 position-relative' href="">
                <i class="bi bi-heart"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger navbar_badge">
                    2
                    <span class="visually-hidden">unread messages</span>
                </span>
            </a>
        </div>
        <div>
            <a className='navbar_icons me-4 position-relative' href="">
                <i class="bi bi-cart2"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger navbar_badge">
                    2
                    <span class="visually-hidden">unread messages</span>
                </span>
            </a>
        </div>
        <div>
            <a className='navbar_account_icons' href="">
                <i class="bi bi-person-circle"></i>
            </a>
        </div>
      </div>
  </div>
</nav>
  )
}

export default Navbar
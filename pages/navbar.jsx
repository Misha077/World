import React from 'react'

function navbar() {
  return (
    <div>
      {/* header section start */}
      <div className="header_section">
        <div className="header_main">
          <div className="mobile_menu">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="logo_mobile">
                <a href="index.html">
                  <img src="images/logo.png" />
                </a>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="index.html">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="services.html">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="blog.html">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="contact.html">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="container-fluid">
            <div className="logo">
              <a href="index.html">
                <img src="images/logo.png" />
              </a>
            </div>
            <div className="menu_main">
              <ul>
                <li className="active">
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="about.html">About</a>
                </li>
                <li>
                  <a href="services.html">Services</a>
                </li>
                <li>
                  <a href="blog.html">Blog</a>
                </li>
                <li>
                  <a href="contact.html">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* header section end */}
    </div>
  );
}

export default navbar
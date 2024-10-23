import React from 'react'

function about() {
  return (
    <div>
      

      <>
        <link rel="stylesheet" href="../styles/css/responsive.css" />

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
        {/* about section start */}
        <div className="about_section layout_padding">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="about_taital_main">
                  <h1 className="about_taital">About Us</h1>
                  <p className="about_text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which dont
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there is not
                    anything embarrassing hidden in the middle of text. All{" "}
                  </p>
                  <div className="readmore_bt">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 padding_right_0">
                <div>
                  <img src="images/about-img.png" className="about_img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* about section end */}
        {/* footer section start */}
        <div className="footer_section layout_padding">
          <div className="container">
            <div className="input_btn_main">
              <input
                type="text"
                className="mail_text"
                placeholder="Enter your email"
                name="Enter your email"
              />
              <div className="subscribe_bt">
                <a href="#">Subscribe</a>
              </div>
            </div>
            <div className="location_main">
              <div className="call_text">
                <img src="images/call-icon.png" />
              </div>
              <div className="call_text">
                <a href="#">Call +01 1234567890</a>
              </div>
              <div className="call_text">
                <img src="images/mail-icon.png" />
              </div>
              <div className="call_text">
                <a href="#">demo@gmail.com</a>
              </div>
            </div>
            <div className="social_icon">
              <ul>
                <li>
                  <a href="#">
                    <img src="images/fb-icon.png" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/twitter-icon.png" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/linkedin-icon.png" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/instagram-icon.png" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* footer section end */}
        {/* copyright section start */}
        <div className="copyright_section">
          <div className="container">
            <p className="copyright_text">
              2020 All Rights Reserved. Design by{" "}
              <a href="https://html.design">Free html Templates</a> Distributed
              by <a href="https://themewagon.com">ThemeWagon</a>
            </p>
          </div>
        </div>
        {/* copyright section end */}
        {/* Javascript files*/}
        {/* sidebar */}
        {/* javascript */}
      </>
    </div>
  );
}

export default about
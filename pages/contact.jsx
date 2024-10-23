import React from 'react'

function contact() {
  return (
    <div>
      <>
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
        {/* contact section start */}
        <div className="contact_section layout_padding">
          <div className="container">
            <h1 className="contact_taital">Request A Call Back</h1>
            <div className="email_text">
              <div className="form-group">
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Name"
                  name="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Phone Numbar"
                  name="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="email-bt"
                  placeholder="Email"
                  name="Email"
                />
              </div>
              <div className="form-group">
                <textarea
                  className="massage-bt"
                  placeholder="Massage"
                  rows={5}
                  id="comment"
                  name="Massage"
                  defaultValue={""}
                />
              </div>
              <div className="send_btn">
                <a href="#">SEND</a>
              </div>
            </div>
          </div>
        </div>
        {/* contact section end */}
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
      </>
    </div>
  );
}

export default contact
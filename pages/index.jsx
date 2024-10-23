import React from "react";
// import k from ""
import Services from "./services";
import HomeHead from "./homeHead";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "./slider"



function Home() {
  return (
    <div>
      <>
        
        <Slider />
       
        <HomeHead SlideInterValTime={2000}/>
        <Services />
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
                    anything embarrassing hidden in the middle of text.
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
        {/* blog section start */}
        <div className="blog_section layout_padding">
          <div className="container">
            <h1 className="blog_taital">See Our Video</h1>
            <p className="blog_text">
              many variations of passages of Lorem Ipsum available, but the
              majority have suffered alteration in some form, by injected
              humour, or randomised words which
            </p>
            <div className="play_icon_main">
              <div className="play_icon">
                <a href="./video">
                  <img src="images/play-icon.png" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* blog section end */}

        {/* client section start */}
        <div className="client_section layout_padding">
          <div className="container">
            <h1 className="client_taital">Testimonial</h1>
            <div className="client_section_2 colorr">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                {/* <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={0}
                    className="active"
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={1}
                  />
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to={2}
                  />
                </ol> */}

                <div className="carousel-inner">
                  <Carousel>
                    <div className="carousel-item active">
                      <div className="client_main">
                        <div className="box_left">
                          <p className="lorem_text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.
                          </p>
                        </div>
                        <div className="box_right">
                          <div className="client_taital_left">
                            <div className="client_img">
                              <img src="images/client-img.png" />
                            </div>
                          </div>
                          <div className="client_taital_right">
                            <h4 className="client_name">Dame</h4>
                            <p className="customer_text">Customer</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item active">
                      <div className="client_main">
                        <div className="box_left">
                          <p className="lorem_text">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised
                            words which dont look even slightly believable.
                          </p>
                        </div>
                        <div className="box_right">
                          <div className="client_taital_left">
                            <div className="client_img">
                              <img src="images/client-img1.png" />
                            </div>
                          </div>
                          <div className="client_taital_right">
                            <h4 className="client_name">Dame</h4>
                            <p className="customer_text">Customer</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item active">
                      <div className="client_main">
                        <div className="box_left">
                          <p className="lorem_text">
                            At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis praesentium voluptatum
                            deleniti atque corrupti quos dolores et quas
                            molestias excepturi sint occaecati cupiditate non
                            provident, similique sunt in culpa qui officia
                            deserunt mollitia animi, id est laborum et dolorum
                            fuga.
                          </p>
                        </div>
                        <div className="box_right">
                          <div className="client_taital_left">
                            <div>
                              <img
                                className="imgg"
                                src="images/toolxox-com-roundcorner.png"
                              />
                            </div>
                          </div>
                          <div className="client_taital_right">
                            <h4 className="client_name">Dame</h4>
                            <p className="customer_text">Customer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* choose section start */}
        <div className="choose_section layout_padding">
          <div className="container">
            <h1 className="choose_taital">Why Choose Us</h1>
            <p className="choose_text">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there is not anything embarrassing
              hidden in the middle of text. All{" "}
            </p>
            <div className="read_bt_1">
              <a href="#">Read More</a>
            </div>
            <div className="newsletter_box">
              <h1 className="let_text">Let Start Talk with Us</h1>
              <div className="getquote_bt">
                <a href="#">Get A Quote</a>
              </div>
            </div>
          </div>
        </div>
        {/* choose section end */}
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
      </>
    </div>
  );
}

export default Home;

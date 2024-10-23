import React from 'react'

function banner() {
  return (
    <div>
      <>
        {/* banner section start */}
        <div className="banner_section layout_padding">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <h1 className="banner_taital">Adventure</h1>
                  <p className="banner_text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have sufferedThere are ma
                    available, but the majority have suffered
                  </p>
                  <div className="read_bt">
                    <a href="#">Get A Quote</a>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <h1 className="banner_taital">Adventure</h1>
                  <p className="banner_text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have sufferedThere are ma
                    available, but the majority have suffered
                  </p>
                  <div className="read_bt">
                    <a href="#">Get A Quote</a>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <h1 className="banner_taital">Adventure</h1>
                  <p className="banner_text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have sufferedThere are ma
                    available, but the majority have suffered
                  </p>
                  <div className="read_bt">
                    <a href="#">Get A Quote</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* banner section end */}
      </>
    </div>
  );
}

export default banner
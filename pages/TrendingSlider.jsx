import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function TrendingSlider() {
  return (
    <div>
      <h2>NextJs Carousel - GeeksforGeeks</h2>
      <Carousel>
        <div>
          <img src="images/about-img.png" alt="image1" />
          <p>Image 1</p>
        </div>
        <div>
          <img src="images/banner-bg.png" alt="image2" />
          <p>Image 2</p>
        </div>
        <div>
          <img src="images/blog-mobile-bg.png" alt="image3" />
          <p>Image 3</p>
        </div>
        <div>
          <img src="images/client-img.png" alt="image4" />
          <p>Image 4</p>
        </div>
        <div>
          <img src="images/blog-bg.png" alt="image5" />
          <p>Image 5</p>
        </div>
      </Carousel>
    </div>
  );
}

export default TrendingSlider
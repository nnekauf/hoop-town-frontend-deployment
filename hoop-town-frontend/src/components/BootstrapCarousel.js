import React, { Component } from 'react'  
import Players from "../images/carousel_2.mp4"
import hoop from "../images/carousel_3.mp4"
import team from "../images/carousel_1.mp4"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const BootstrapCarousel = () => {
  
  return(

    <div className="carousel-wrapper">
      <Carousel infiniteLoop={true}  autoPlay={true}   interval={4000}      >
          <div>
              <video id="carouselVideo" src={team} 
              type="video/mp4" 
              loop autoPlay muted 
              alt="First slide"/>
          </div>
          <div>
              <video id="carouselVideo" src={Players}
              type="video/mp4" 
              loop autoPlay muted 
              alt="Second slide" />
          </div>
          <div>
              <video id="carouselVideo" src={hoop} 
              type="video/mp4" 
              loop autoPlay muted 
              alt="Third slide"/>
          </div>
      </Carousel>
    </div>
   
  )
  
    
}
  
    
export default BootstrapCarousel
import React from "react";
import SliderImport from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'

function Carrusel(){
    
    const Slider =SliderImport.default;
    const settings = {
        rows: 3,
        slidesPerRow: 1,
        centerMode: true,
        centerPadding: '60px',
        dots: true,
        infinite: true,
        speed: 500,

        responsive: [
            {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
            },
            {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
            }
        ]
    };

   return (
    <div className="w-full max-w-xl mx-auto ">
      <Slider {...settings}>

        <div> 
          <img src="https://unavatar.io/apple-music/artist:daft%20punk" alt="1" />
        </div>

        <div>
          <img src="https://unavatar.io/apple-music/artist:daft%20punk" alt="2" />
        </div>

        <div>
          <img src="https://unavatar.io/apple-music/artist:daft%20punk" alt="3"  />
        </div>

        <div>
          <img src="https://unavatar.io/apple-music/artist:daft%20punk" alt="4"  />
        </div>

      </Slider>
    </div>
  );
}


export default Carrusel;
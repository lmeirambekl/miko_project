import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";


function Home() {
    const sliderImages = [
      "https://qpicture.ru/images/2022/03/09/brb.png",
      "https://dknews.kz/storage/news/2022-06/rhymjOYiBgsj8yDq19R7kCkHDvdIYJDP87n0VBzm.jpg",
      "https://newrestaurant.ru/wp-content/uploads/2016/08/kak-otkryt-produktovyj-magazin.jpg",
    ];
  
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
      <>
       
        <div className="welcome">
          <h1>Welcome to Multi Market!!!</h1>
          <p>
            Multi Market - the largest range of products and the largest market in the Country. Here you will find all types of products and non-foods.
          </p>
        </div>
        <br />
        <div className="ads">
          <h1>Dear users of the Multi Market!</h1>
          <p>
            We inform you about changes when using Multi Market delivery for orders. As part of the revision, the following was implemented:
            - Possibility of specifying the contact information of the recipient of the goods when placing an order (by the customer) and when confirming the order (by the supplier);
          </p>
        </div>
        <Link to="/market" className="shopping-button">
        Go Shopping
      </Link>

        <Slider {...sliderSettings}>
          {sliderImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </>
    );
  }
  
  export default Home;
  

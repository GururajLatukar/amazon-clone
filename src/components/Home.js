import React from "react";
import "./Home.css";
import Product from "./Product";

function Home(props) {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="banner"
          className="home__image"
        />

        <div className="home__row">
          <Product
            id={12481515}
            title="The lean startup"
            price={40}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            alt="product-image"
          />
          <Product
            id={12481518}
            title="The lean startup"
            price={40}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            alt="product-image"
          />
        </div>
        <div className="home__row">
          <Product
            id={12481519}
            title="The lean startup"
            price={40}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            alt="product-image"
          />
          <Product
            id={12481520}
            title="The lean startup"
            price={40}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            alt="product-image"
          />
          <Product
            id={12481521}
            title="The lean startup"
            price={40}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            alt="product-image"
          />
        </div>
        <div className="home__row">
          <Product
            id={12481522}
            title="The lean startup"
            price={40}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            alt="product-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

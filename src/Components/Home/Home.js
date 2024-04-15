import React from "react";
import "./Home.css";
import corrouselimg from "../../Img/carrousel.png";
import homeimg from "../../Img/homeimg.png";

const Home = () => {
  return (
    <div className="home">
      {/* Sección del carrusel */}
      <div className="carousel-section">
        <h1>Title Carrusel</h1>
        <img src={corrouselimg} alt="Carousel" />
      </div>

      {/* Sección del botón */}
      <div className="button-section">
      <button className="btn btn-primary rounded-pill py-3 px-6">
          <div>Kontakte</div>
          <div>Sie Uns</div>
          <div>Gerne</div>
        </button>
      </div>

      {/* Sección de la imagen con el título y el párrafo */}
      <div className="image-section">
        <img src={homeimg} alt="Home" />
        <div>
          <h1>Unsere Philosophie</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
            lectus ligula. Morbi non nunc sed nulla cursus mattis. In hac
            habitasse platea dictumst. Etiam id est a nisi tristique dictum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
            lectus ligula. Morbi non nunc sed nulla cursus mattis. In hac
            habitasse platea dictumst. Etiam id est a nisi tristique dictum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import "./Meinperson.css";
import MP1 from "../../Img/MP1.png";
import MP2 from "../../Img/MP2.png";
import MP3 from "../../Img/MP3.png";

const MeinPerson = () => {
  return (
    <div className="mein-person">
     {/* Primera sección */}
<div className="first-section">
  <div className="content-1">
    <div className="left-content">
      <img className="img1" src={MP1} alt="MP1" />
    </div>
    <div className="right-content">
      
      <p className="paragraph-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
        lectus ligula. Morbi non nunc sed nulla cursus mattis. In hac
        habitasse platea dictumst. Etiam id est a nisi tristique dictum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
        lectus ligula. Morbi non nunc sed nulla cursus mattis. In hac
        habitasse platea dictumst. Etiam id est a nisi tristique dictum.
      </p>
    </div>
  </div>
  <div className="content-2">
    <div className="left-content">
     <h1>Name</h1> <p className="paragraph-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
        lectus ligula. Morbi non nunc sed nulla cursus mattis. In hac
        habitasse platea dictumst. Etiam id est a nisi tristique dictum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
        lectus ligula. Morbi non nunc sed nulla cursus mattis. In hac
        habitasse platea dictumst. Etiam id est a nisi tristique dictum.
      </p>
    </div>
    <div className="right-content">
      <img className="img2" src={MP2} alt="MP2" />
    </div>
  </div>
</div>

      {/* Segunda sección */}
      <div className="image-grid">
        {[MP3, MP3, MP3, MP3, MP3, MP3].map((img, index) => (
          <div key={index}>
            <img src={img} alt={"MP3-" + (index + 1)} />
          </div>
        ))}
      </div>
      {/* Tercera sección */}
      <div className="video-container">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/riUNd9S9bFc"
          title="Lucky y el rescate peligroso | SPIRIT CABALGANDO LIBRE"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MeinPerson;

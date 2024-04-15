import React from "react";
import "./Angebote.css";
import Angebote1 from "../../Img/Angebote1.png"
import Angebote2 from "../../Img/Angebote2.png"


const Angebote = () => {
  return (
    <div className="angebote">
      <div className="section">
        <h1>Angebote</h1>
        <img src={Angebote1} alt="Angebote" style={{ width: "1500px", height: "500px" }}/>
      </div>
      <div className="section">
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
            lectus ligula. Morbi non nunc sed nulla cursus mattis. In hac
            habitasse platea dictumst. Etiam id est a nisi tristique dictum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
            lectus ligula. Morbi non nunc sed nulla cursus mattis. In hac
            habitasse platea dictumst. Etiam id est a nisi tristique dictum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
            lectus ligula. Morbi non nunc sed nulla cursus mattis. In hac
            habitasse platea dictumst. Etiam id est a nisi tristique dictum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
            lectus ligula. Morbi non nunc sed nulla cursus mattis. In hac
            habitasse platea dictumst. Etiam id est a nisi tristique dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
            lectus ligula. Morbi non nunc sed nulla cursus mattis. In hac
            habitasse platea dictumst. Etiam id est a nisi tristique dictum.
          </p>
          <img src={Angebote2} alt="Description" />
        </div>
        <div className="description">
          <img src={Angebote2} alt="Description" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
            lectus ligula. Morbi non nunc sed nulla cursus mattis. In hac
            habitasse platea dictumst. Etiam id est a nisi tristique dictum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Angebote;


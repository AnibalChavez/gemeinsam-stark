import React from "react";
import "./Meinteam.css";
import team1 from "../../Img/team1.png";
import team2 from "../../Img//MP3.png";
import tier1 from "../../Img/Tier1.png";
import tier2 from "../../Img/tier2.jpg";

const MeinTeam = () => {
  return (
    <div className="mein-team">
      {/* Sección de equipo */}
      <div className="foto-team">
        <h1>Unseres Team</h1>
        <div>
          <img className="rounded" src={team1} alt="Team 1" />
        </div>
      </div>
      <div className="team">
        <div className="row">
          <div className="person">
            <img className="rounded" src={team2} alt="Team 2" />
            <h2>Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quis lectus ligula. Morbi non nunc sed nulla cursus mattis. In
              hac habitasse platea dictumst. Etiam id est a nisi tristique
              dictum.
            </p>
          </div>
          <div className="person">
            <img className="rounded" src={team2} alt="Team 3" />
            <h2>Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quis lectus ligula. Morbi non nunc sed nulla cursus mattis. In
              hac habitasse platea dictumst. Etiam id est a nisi tristique
              dictum.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="person">
            <img className="rounded" src={team2} alt="Team 4" />
            <h2>Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quis lectus ligula. Morbi non nunc sed nulla cursus mattis. In
              hac habitasse platea dictumst. Etiam id est a nisi tristique
              dictum.
            </p>
          </div>
          <div className="person">
            <img className="rounded" src={team2} alt="Team 5" />
            <h2>Name</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              quis lectus ligula. Morbi non nunc sed nulla cursus mattis. In
              hac habitasse platea dictumst. Etiam id est a nisi tristique
              dictum.
            </p>
          </div>
        </div>
      </div>
{/* Sección de tiers */}
<div className="foto-tier">
  <h1>Unseres Tier</h1>
  <div>
    <img className="tier-img" src={tier1} alt="Tier 1" />
  </div>
</div>
<div className="tiers">
  <div className="column">
    <div className="tier">
      <img className="tier-img" src={tier2} alt="Tier 2" />
      <h1>Name</h1>
    </div>
    <div className="tier">
      <img className="tier-img" src={tier2} alt="Tier 3" />
      <h1>Name</h1>
    </div>
    <div className="tier">
      <img className="tier-img" src={tier2} alt="Tier 4" />
      <h1>Name</h1>
    </div>
    <div className="tier">
      <img className="tier-img" src={tier2} alt="Tier 5" />
      <h1>Name</h1>
    </div>
  </div>
  <div className="column">
    <div className="tier">
      <img className="tier-img" src={tier2} alt="Tier 6" />
      <h1>Name</h1>
    </div>
    <div className="tier">
      <img className="tier-img" src={tier2} alt="Tier 7" />
      <h1>Name</h1>
    </div>
    <div className="tier">
      <img className="tier-img" src={tier2} alt="Tier 8" />
      <h1>Name</h1>
    </div>
    <div className="tier">
      <img className="tier-img" src={tier2} alt="Tier 9" />
      <h1>Name</h1>
    </div>
  </div>
  <div className="column">
    <div className="tier">
      <img className="tier-img" src={tier2} alt="Tier 10" />
      <h1>Name</h1>
    </div>
    <div className="tier">
      <img className="tier-img" src={tier2} alt="Tier 11" />
      <h1>Name</h1>
    </div>
    <div className="tier">
      <img className="tier-img" src={tier2} alt="Tier 12" />
      <h1>Name</h1>
    </div>
  </div>
</div>


    </div>
  );
};

export default MeinTeam;

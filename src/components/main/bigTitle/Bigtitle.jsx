import React from "react";
import "./Bigtitle.css";
import Redtext from "../bigTitle/redtext.png";
import Twogamers from "../bigTitle/twogamers.png";

function Bigtitle() {
  return (
    <div className="twogamers-container">
      <div className="bigjersey">
        <div className="text-jersey">Jersey</div>
        <div className="red">
          <img className="redtext" src={Redtext} alt="" />
        </div>
        <div className="text-jersey">Nba</div>
      </div>

      <div className="nba-team">
        <div className="nba-team-text">
          whichever <span className="blue-nba">nba</span>{" "}
          <span className="red-team">team</span> your support
          <br />
          get your jersey here today.
        </div>
      </div>
      <div>
        <img className="twogamers" src={Twogamers} alt="" />
      </div>
    </div>
  );
}

export default Bigtitle;

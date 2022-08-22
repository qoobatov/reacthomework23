import React from "react";
import "./Store.css";

function Store(props) {
  return (
    <>
      <div className="white-page">
        <div className="txt-card-container">
          <div className="every-team">Every team</div>
          <div className="big-store">
            <span className="blue-one">One</span> store
          </div>
          <div className="big-team">
            <span className="red-every">Every</span> team
          </div>
          <div className="favorite-team">
            Select your favorite team to view it’s jersys.
          </div>
        </div>
        <div className="east-west-block">
          <div className="east-block">
            <p className="txt-east">east</p>
            <div className="east-photos-block">
              <img className="east-photos" src={props.image} alt="" />
              <img className="east-photos" src={props.image2} alt="" />
              <img className="east-photos" src={props.image3} alt="" />
              <img className="east-photos" src={props.image4} alt="" />
              <img className="east-photos" src={props.image} alt="" />
              <img className="east-photos" src={props.image2} alt="" />
              <img className="east-photos" src={props.image3} alt="" />
              <img className="east-photos" src={props.image4} alt="" />
              <img className="east-photos" src={props.image} alt="" />
              <img className="east-photos" src={props.image2} alt="" />
              <img className="east-photos" src={props.image3} alt="" />
              <img className="east-photos" src={props.image4} alt="" />
              <img className="east-photos" src={props.image4} alt="" />
              <img className="east-photos" src={props.image4} alt="" />
              <img className="east-photos" src={props.image4} alt="" />
            </div>
          </div>
          <div className="west-block">
            <p className="txt-west">west</p>
            <div className="east-photos-block">
              <img className="east-photos" src={props.image} alt="" />
              <img className="east-photos" src={props.image2} alt="" />
              <img className="east-photos" src={props.image3} alt="" />
              <img className="east-photos" src={props.image4} alt="" />
              <img className="east-photos" src={props.image} alt="" />
              <img className="east-photos" src={props.image2} alt="" />
              <img className="east-photos" src={props.image3} alt="" />
              <img className="east-photos" src={props.image4} alt="" />
              <img className="east-photos" src={props.image} alt="" />
              <img className="east-photos" src={props.image2} alt="" />
              <img className="east-photos" src={props.image3} alt="" />
              <img className="east-photos" src={props.image4} alt="" />
              <img className="east-photos" src={props.image4} alt="" />
              <img className="east-photos" src={props.image4} alt="" />
              <img className="east-photos" src={props.image4} alt="" />
            </div>
          </div>
        </div>
        <div className="btn-view-3">
          <span className="view-all-3">About Team</span>
          <svg
            width="61"
            height="9"
            viewBox="0 0 61 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60.3536 4.85355C60.5488 4.65829 60.5488 4.34171 60.3536 4.14645L57.1716 0.964466C56.9763 0.769204 56.6597 0.769204 56.4645 0.964466C56.2692 1.15973 56.2692 1.47631 56.4645 1.67157L59.2929 4.5L56.4645 7.32843C56.2692 7.52369 56.2692 7.84027 56.4645 8.03553C56.6597 8.2308 56.9763 8.2308 57.1716 8.03553L60.3536 4.85355ZM0 5H60V4H0V5Z"
              fill="#FB0223"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Store;

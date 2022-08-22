import React from "react";
import "./Basketball.css";
import Arrows from "./Arrow.svg";
import Slider from "./Slider.svg";
import Viewgroup from "./viewgroup.svg";
import Offsite from "./offsite.svg";
function Basketball() {
  return (
    <>
      <div className="black-page-basket">
        <div className="text-card-container-basket">
          <div className="jerseys-bestsellers-basket">Hall of fame</div>
          <div className="big-bestseller-basket">Basketball</div>
          <div className="big-collection-basket">Hall of fame</div>
          <div className="regular-seasons-basket">
            The naismith memorial basketball hall of fame is home to more than.
            <br />
            Four nundred iductees and more than 40 000 square feet of basketball
            history.
            <img className="arrows" src={Arrows} alt="" />
          </div>
          <div className="years">
            <span className="digit-years">2005</span>
            <span className="digit-years">2006</span>
            <span className="digit-years">2007</span>
            <span className="digit-years">2008</span>
            <span className="digit-years-red">2009</span>
            <span className="digit-years">2010</span>
            <span className="digit-years">2011</span>
            <span className="digit-years">2012</span>
          </div>
          <div className="slider">
            <img src={Slider} alt="" />
          </div>
          <div className="jordan">
            <span className="michael">Michael <span className="jordan-black">jordan</span> </span>
            <img src={Viewgroup} alt="" />
          </div>
          <div className="david">
            <span className="robinson">David  <span className="jordan-black">robinson</span> </span>
            <img src={Viewgroup} alt="" />
          </div>
          <div className="jordan">
            <span className="john">John  <span className="jordan-black">stockton</span> </span>
            <img src={Viewgroup} alt="" />
          </div>
          <div className="offsite">
            <img src={Offsite} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Basketball;

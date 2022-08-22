import React from "react";
import "./Bestsellers.css";
import Card from "./card/Card";
const tcard = [
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9b513306-b1c6-47e5-b2d9-03f6432bd72f/liverpool-fc-2022-23-stadium-home-dri-fit-football-shirt-XhnBrv.png",
    title: "Liverpool F.C. 2022/23 Stadium Home",
    description: "Men's Nike Dri-FIT Football Shirt",
    cost: "$115",
  },
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d8a54e85-3d3f-4e58-9c78-d83611e9c217/liverpool-fc-2022-23-match-home-dri-fit-adv-football-shirt-7SPRhx.png",
    title: "Liverpool F.C. 2022/23 Match Home",
    description: "Men's Nike Dri-FIT ADV Football Shirt",
    cost: "$199",
  },
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dd4c7bac-2da3-47bc-8a61-4e91d40ff1a9/sportswear-short-sleeve-top-fbzC99.png",
    title: "Nike Sportswear",
    description: "Men's Short-Sleeve Top",
    cost: "$75",
  },
];




function Bestsellers() {
  return (
    <>
      <div className="black-page">
        <div className="text-card-container">
          <div className="jerseys-bestsellers">Jerseys bestsellers</div>
          <div className="big-bestseller">bestsellers</div>
          <div className="big-collection">collection</div>
          <div className="regular-seasons">
            The jerseys of the best nba players of the regular seasons.
          </div>
        </div>
        {tcard.map((item) => (
          <Card
            image={item.image}
            title={item.title}
            description={item.description}
            cost={item.cost}
          />
        ))}
        <div className="btn-view">
          <span className="view-all">View all</span>
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

export default Bestsellers;

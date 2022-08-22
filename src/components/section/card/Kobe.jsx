import React from "react";
import Card from "./Card";
import "./Kobe.css";

const kcard = [
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/89b3468e-2a1d-4ec1-8258-b47ce754aa42/lebron-james-lakers-dri-fit-nba-jersey-VJ2bbP.png",
    title: "LeBron James Lakers",
    description: "Men's Nike Dri-FIT NBA Jersey",
    cost: "$199",
  },
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b07acec2-9494-4266-940d-b6aa87eaf48c/kevin-durant-nets-icon-edition-2020-nba-swingman-jersey-G8mPVr.png",
    title: "Kevin Durant Nets Icon Edition 2020",
    description: "Nike NBA Swingman Jersey",
    cost: "$129",
  },
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0174451a-8c08-4387-ba98-4a737a85bee6/all-star-edition-jordan-dri-fit-nba-swingman-jersey-QGZSfd.png",
    title: "All-Star Edition",
    description: "Jordan Dri-FIT NBA Swingman Jersey",
    cost: "$149",
  },
];

function Kobe(props) {
  return (
    <>
      <>
        <div className="black-page">
          <div className="text-card-container">
            <div className="jerseys-bestsellers">Jerseys kobe bryant</div>
            <div className="big-bestseller"> <span className="kobe-yellow">kobe</span> <span className="bryant-purple">bryant</span> </div>
            <div className="big-collection">Authentic edition</div>
            <div className="regular-seasons-kobe">
              Kobe bryant: a basketball legend. bryant crafted a storied career.
              <br />
              In his 20 seasons with the lakers. the lagacy of kobe bryant was a
              far-reaching one.
            </div>
          </div>
          {kcard.map((item) => (
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
    </>
  );
}

export default Kobe;

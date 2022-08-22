import React from "react";
import "./Jordan.css";
import Card from "./Card";

const jcard = [
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/146332b8-a145-42e9-a0cc-acfc1f275bd6/los-angeles-lakers-city-edition-dri-fit-nba-swingman-jersey-W4m3x8.png",
    title: "LeBron James Lakers",
    description: "Men's Nike Dri-FIT NBA Jersey",
    cost: "$99",
  },
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/6b6ef1e7-8602-43b9-b63b-6e2130ceda37/tottenham-hotspur-2022-23-stadium-away-dri-fit-football-shirt-91f332.png",
    title: "Tottenham Hotspur 2022/23 Stadium Away",
    description: "Men's Nike Dri-FIT Football Shirt",
    cost: "$115",
  },
  {
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4b40d436-936f-4350-927d-a14b5c6d1b68/dallas-mavericks-city-edition-dri-fit-nba-swingman-jersey-tHpP6w.png",
    title: "All-Star Edition",
    description: "Jordan Dri-FIT NBA Swingman Jersey",
    cost: "$89",
  },
];
function Jordan(props) {
  return (
    <>
      <div className="black-page">
        <div className="text-card-container">
          <div className="jerseys-bestsellers">Jerseys 1992 team usa</div>
          <div className="big-bestseller">
            {" "}
            <span className="kobe-blue">1992</span>{" "}
            <span className="bryant-red">team usa</span>{" "}
          </div>
          <div className="big-collection">Authentic edition</div>
          <div className="regular-seasons-kobe">
            Jerseys of the united sates man’s olympics basketball team,
            <br />
            which represented the us of a in the 1992 summer olympics in
            barcelona.
          </div>
        </div>
        {jcard.map((item) => (
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

export default Jordan;

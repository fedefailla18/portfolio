import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PorfolioItem";

const Portfolio = () => {
  return (
    <div className="flex flex-col md:flex-row item-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {portfolio.map((p) => (
          <PortfolioItem
            imgUrl={p.imgUrl}
            title={p.title}
            stack={p.stack}
            link={p.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4> {heading} </h4>
        <p> {subtitle} </p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle(
        "Tesla is going to buy BitCoin!",
        "This gets world finance crazy!"
      )}
      {newsArticle(
        "Bitcoin is going to sale it's market share!",
        "This gets world finance crazy!"
      )}
      {newsArticle(
        "All News are in some way manipulated!",
        "This gets world finance crazy!"
      )}
      {newsArticle(
        "Are you our next talent in a fast growing startup?",
        "This gets world finance crazy!"
      )}
    </div>
  );
};

export default Widgets;

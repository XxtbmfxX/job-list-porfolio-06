import React from "react";
import UserImg from "../images/account.svg";

const Card = () => {
  return (
    <article className="Card">
      <img src={UserImg} alt="user" />
      <div className="Card_info">
        <div className="Card_info-status">
          <span className="Card_info-status-title-name">Photosnap</span>
          <span className="Card_info-status-title-new">NEW!</span>
          <span className="Card_info-status-title-featured">FEATURED</span>
          <br />
        </div>
        <h1>Senior Fronted Developer</h1>
        <div className="Card_info-stats">
          <small>1d ago </small>
          <small> &middot; </small>
          <small>Full Time </small>
          <small> &middot; </small>
          <small>USA only </small>
        </div>
        <hr />
      </div>

      <div className="Card_languages">
        <span>Frontend</span>
        <span>Senior</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
      </div>
    </article>
  );
};

export default Card;

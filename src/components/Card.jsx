import React from "react";

const Card = ({ innerData, logo }) => {
  return (
    <article className="Card">
      <div className="Card_info">
        <div className="Card_info-image">
          <img src={logo} alt="user" />
        </div>

        <div className="Card-text">
          <div className="Card_info-status">
            <span className="Card_info-status-title-name">
              {innerData.company}
            </span>
            {innerData.new ? (
              <span className="Card_info-status-title-new">NEW!</span>
            ) : null}
            {innerData.featured ? (
              <span className="Card_info-status-title-featured">FEATURED</span>
            ) : null}
            <br />
          </div>
          <h1> {innerData.position} </h1>
          <div className="Card_info-stats">
            <small> {innerData.postedAt} </small>
            <small> &middot; </small>
            <small> {innerData.contract} </small>
            <small> &middot; </small>
            <small> {innerData.location} </small>
          </div>
        </div>

        <hr />
      </div>
      <div className="Card_languages">
        {innerData.languages.map((lang) => (
          <span>{lang}</span>
        ))}
        {innerData.tools.map((lang) => (
          <span>{lang}</span>
        ))}
      </div>
    </article>
  );
};

export default Card;

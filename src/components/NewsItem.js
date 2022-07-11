import React from "react";

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <>
      <div className="col-4">
        <div className="card" style={{ width: "25rem" }}>
          <img src={urlToImage} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"><a href={url}>{title}</a></h5>
            <p className="card-text mb-4">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;

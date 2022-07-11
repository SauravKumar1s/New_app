import React from "react";
import News from "./News";
import NewsItem from "./NewsItem";

const Header = () => {
  return (
    <>
      <nav className="navbar bg-dark fixed-top ">
        <div className="container-fluid ">
          <b>
            <a className="navbar-brand text-center text-light ">
              <span className="navbar-brand text-danger">i</span>News App By
              Saurav
            </a>
          </b>
        </div>
      </nav>
      <News />
      <NewsItem />
    </>
  );
};

export default Header;

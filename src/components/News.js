import React, { useState, useEffect } from "react";
import "./news.css";
import axios from "axios";
import NewsItem from "./NewsItem";

const News = () => {
  const [Newss, setNews] = useState([]);

  useEffect(() => {
    const ShowNews = async () => {
      const res = await axios.get(
       "https://newsapi.org/v2/top-headlines?country=us&apiKey=5f5b7c2c8fd943e4a3bd99cc9800a5cf"
      );
      setNews(res.data.articles);
      console.log(res.data.articles);
    };
    ShowNews();
  }, []);

  return (
    <>
      <div className="container ">
        <div className="row m-4">
      {Newss.map((value) => {
        return (
          <NewsItem
            title={value.title.substring(0, 50) + "..."}
            description={value.description.substring(0, 80) + "..."}
            url={value.url}
            urlToImage={value.urlToImage}
          />
        );
      })}
          </div>
      </div>
 
    </>
  );
};

export default News;

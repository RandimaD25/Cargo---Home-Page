import React from "react";
import NewsCard from "../components/NewsCard";

const NewsSection = () => {
  return (
    <div className="news-section">
      <h2>LATEST NEWS</h2>
      <div className="news-sub">
        <p className="news-dot"></p>
        <p>INTEGER CONGUEELIT</p>
      </div>
      <div className="news-card-section">
        <NewsCard
          date="26"
          month="May"
          image="news-1.jpg"
          title=" Lorem ipsum dolor sit"
          count="15"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, at?  dolor sit amet consectetur adipisicing elit. Deleniti, at?"
        />

        <NewsCard
          date="22"
          month="May"
          image="news-2.jpg"
          title=" Lorem ipsum dolor sit"
          count="15"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, at?  dolor sit amet consectetur adipisicing elit. Deleniti, at?"
        />

        <NewsCard
          date="12"
          month="May"
          image="news-3.jpg"
          title=" Lorem ipsum dolor sit"
          count="15"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, at?  dolor sit amet consectetur adipisicing elit. Deleniti, at?"
        />

        <NewsCard
          date="29"
          month="Apr"
          image="news-4.jpg"
          title=" Lorem ipsum dolor sit"
          count="15"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, at?  dolor sit amet consectetur adipisicing elit. Deleniti, at?"
        />
      </div>
    </div>
  );
};

export default NewsSection;

import React from "react";
import { BiSolidMessageRounded } from "react-icons/bi";

const NewsCard = ({ image, date, month, title, text, count }) => {
  return (
    <div className="news-card">
      <div className="news-left">
        <div className="news-date">
          <p className="news-date-num">{date}</p>
          <p className="news-month">{month}</p>
        </div>
        <img src={image} alt="" />
      </div>
      <div className="news-right">
        <p className="news-title">{title}</p>
        <div className="news-count">
          <p>Admin</p>
          <BiSolidMessageRounded />
          <p>{count}</p>
        </div>
        <p className="news-text">{text}</p>
      </div>
    </div>
  );
};

export default NewsCard;

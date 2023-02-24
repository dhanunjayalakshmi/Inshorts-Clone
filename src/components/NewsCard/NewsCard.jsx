import React from "react";
import "./NewsCard.css";

const NewsCard = ({ newsItem }) => {
  const fullDate = new Date(newsItem?.publishedAt);
  let date = fullDate.toString().split(" ");
  const hour = parseInt(date[4].substring(0, 2));
  const time = hour > 12 ? true : false;

  return (
    <div className="newsCard">
      <img
        src={
          newsItem?.urlToImage
            ? newsItem?.urlToImage
            : "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png"
        }
        alt={newsItem?.title}
        className="newsImage"
      />
      <div className="newsText">
        <div>
          <span className="title">{newsItem?.title}</span>
          <br />
          <span className="author">
            <a href={newsItem?.url} target="_blank">
              <b>short</b>
            </a>
            <span className="muted">
              {" "}
              by {newsItem?.author ? newsItem?.author : "unknown"} /{" "}
              {time
                ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                : `${hour}:${date[4].substring(3, 5)} am`}{" "}
              on {date[2]} {date[1]} {date[3]}, {date[0]}
            </span>
          </span>
        </div>
        <div className="lowerNewsText">
          <div className="description">{newsItem?.description}</div>
          <span className="readmore">
            read more at{" "}
            <a href={newsItem?.url} target="_blank" className="source">
              <b>{newsItem?.source?.name}</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

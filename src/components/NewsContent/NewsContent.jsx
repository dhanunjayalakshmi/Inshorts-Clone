import { Container } from "@mui/material";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsContent.css";

const NewsContent = ({ newsArray, newsResults }) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadMessage">
          <span className="downloadText">
            For the best experience use <strong>inshorts</strong> app on your
            smartphone
          </span>
          <img
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
            alt="app store"
          />
          <img
            height="80%"
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
            alt="play store"
          />
        </div>
        <NewsCard />
      </div>
    </Container>
  );
};

export default NewsContent;

import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import NavInshorts from "./components/NavInshorts";
import NewsContent from "./components/NewsContent/NewsContent";
import "./App.css";

const App = () => {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);

  const newsApi = async () => {
    try {
      // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      // const news = await axios.get(
      //   `https://${proxyUrl}newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&category=${category}&pageSize=${loadMore}`
      // );
      // const news = await axios.get(
      //   `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&category=${category}&pageSize=${loadMore}`
      // );

      const news = await axios.get(
        `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`
      );
      setNewsArray(news?.data?.articles?.slice(0, loadMore));
      setNewsResults(news?.data?.totalResults);
      // if (loadMore <= 20) {
      //   window.scrollTo(0, 0);
      // }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
    setLoadMore(20);
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [newsResults, category]);

  useEffect(() => {
    newsApi();
    if (loadMore <= 20) window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, [loadMore]);

  return (
    <div className="App">
      <NavInshorts setCategory={setCategory} />
      <NewsContent
        loadMore={loadMore}
        setLoadMore={setLoadMore}
        newsArray={newsArray}
        newsResults={newsResults}
      />
      <Footer />
    </div>
  );
};

export default App;

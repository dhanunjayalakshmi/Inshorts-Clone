import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import NavInshorts from "./components/NavInshorts";
import NewsContent from "./components/NewsContent/NewsContent";
import apikey from "./data/config";

const App = () => {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}`
      );
      setNewsArray(news?.data?.articles);
      setNewsResults(news?.data?.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
  }, [newsResults, category]);

  return (
    <div>
      <NavInshorts setCategory={setCategory} />
      <NewsContent />
      <Footer />
    </div>
  );
};

export default App;

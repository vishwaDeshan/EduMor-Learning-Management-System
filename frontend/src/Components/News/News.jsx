import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./News.css";
import axios from 'axios'

function News() {
  const { t } = useTranslation();

  const [news, setNews] = useState([]);
  useEffect(() => {
    function getNews() {
      axios.get('http://localhost:8000/news').then((res) => {
        console.log(res.data.existingNews);
        setNews(res.data.existingNews)
      }).catch((err) => {
        alert(err.message)
      })
    }
    getNews();
  }, [])

  return (
    <div className="News">
      <div className="latestNews">{t('Latest News')}</div>
      <ul class="newsHeadline">
        {news.map((news,index) => (
          <li>
          <a href={news.link} target="_blank">{news.news}</a>
        </li>
        ))}
      </ul>
    </div>
    
  );
}
export default News;

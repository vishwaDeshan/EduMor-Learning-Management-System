import React from "react";
import { useTranslation } from "react-i18next";
import "./News.css";
import Headlines from '../../Data/News'

function News() {
  const {t}=useTranslation();
  return (
    <div className="News">
      <div className="latestNews">{t('Latest News')}</div>
      <ul class="newsHeadline">
      {Headlines.map(({newsE,link }, index) => {
          return (
            <li>
          <a href={link} target="_blank">{newsE}</a>
        </li>
          );
        })}
      </ul>
    </div>
  );
}
export default News;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArticleCard from "./ArticleCard"

const Articles = () => {
  const dispatch = useDispatch();


  const article = useSelector((state) => state.articleReducer.articles);
  return (
    <div>
      {article.map((el) => (
        <div key={el.id}>
          <ArticleCard el={el} />
        </div>
      ))}
    </div>
  );
};

export default Articles;
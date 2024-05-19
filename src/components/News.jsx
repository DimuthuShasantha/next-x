"use client";

import { useEffect, useState } from "react";

export default function News() {
  const [news, setNews] = useState([]);
  const [articleNum, setArticalNum] = useState(3);

  useEffect(() => {
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/us.json")
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);
  return (
    <div className="pt-2 space-y-3 text-gray-700 bg-gray-100 rounded-xl">
      <h4 className="px-4 text-xl font-bold">Whats happening</h4>
      {news.slice(0, articleNum).map((article) => (
        <div key={article.url}>
          <a href={article.url} target="_blank">
            <div clasName="">
              <div className="flex items-center justify-center px-4 py-2 space-x-1 hover:bg-gray-200 transition-200">
                <div className="space-y-o.5">
                  <h6 className="text-sm font-bold ">{article.title}</h6>
                  <p className="text-xs font-medium text-gray-500">
                    {article.source.name}
                  </p>
                </div>
                <img
                  src={article.urlToImage}
                  width={70}
                  className="rounded-xl"
                />
              </div>
            </div>
          </a>
        </div>
      ))}
      <button
        onClick={() => setArticalNum(articleNum + 3)}
        className="text-blue-300 pl-4 pb-3 hover:text-blue-400 text-sm"
      >
        Load more...
      </button>
    </div>
  );
}

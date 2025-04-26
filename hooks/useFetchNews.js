// hooks/useFetchNews.js
import { useState, useEffect } from 'react';
import { fetchNews } from '../api/newsApi';

export const useFetchNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadNews = async () => {
      try {
        const articles = await fetchNews();
        setNews(articles);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  return { news, loading, error };
};

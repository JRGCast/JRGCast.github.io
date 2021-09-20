import { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
const News = () => {
  const searchTheme = "https://newsapi.org/v2/top-headlines?q=dados&country=br&category=technology&";
  const { REACT_APP_GNEWSURL, REACT_APP_GNEWSAPIKEY } = process.env;
  const [allNews, setAllNews] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const requestNews = async () => {
      const fetchNews = await fetch(`${searchTheme}${REACT_APP_GNEWSURL}${REACT_APP_GNEWSAPIKEY}`);
      const result = await fetchNews.json();
      setAllNews(result.articles);
      setLoaded(true);
    };
    requestNews();
  }, []);
  const generateCards = () => {
    return (
      allNews.map(({ source, author, title, description, publishedAt, url, urlToImage }, index) =>
      (
        <NewsCard
          key={ index }
          source={ source }
          author={ author }
          title={ title }
          description={ description }
          publishedAt={ publishedAt }
          url={ url }
          urlToImage={ urlToImage }
        />
      ),
      ));
  };
  return (
    <section>
      <input type='text' placeholder='insira uma categoria de notícia' style={ { width: '300px', textAlign: 'center' } } />
      <button type='button' style={ { color: 'black' } }> Buscar </button>
      { loaded ?
        <div>
          { generateCards() }
        </div> : 'Carregando notícias...' }
    </section>);
};

export default News;

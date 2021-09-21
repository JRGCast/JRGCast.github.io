import { useEffect, useState } from 'react';
import NewsCard from './NewsCard';
const News = () => {
  const { REACT_APP_GNEWSURL, REACT_APP_GNEWSAPIKEY } = process.env;
  const [allNews, setAllNews] = useState([]);
  const [loaded, setLoaded] = useState(false);
  // functions
  const requestNews = async (searchCategory = 'technology') => {
    setLoaded(false);
    const searchTheme = `https://newsapi.org/v2/top-headlines?country=br&category=${searchCategory}&`;
    const fetchNews = await fetch(`${searchTheme}${REACT_APP_GNEWSURL}${REACT_APP_GNEWSAPIKEY}`).catch(e => console.log(e));
    const result = await fetchNews.json();
    setAllNews(result.articles);
    setLoaded(true);
  };
  const newsCategories = [
    { value: 'business', show: 'Negócios' },
    { value: 'entertainment', show: 'Entretenimento' },
    { value: 'general', show: 'Geral' },
    { value: 'health', show: 'Saúde' },
    { value: 'science', show: 'Ciência' },
    { value: 'sports', show: 'Esportes' },
    { value: 'technology', show: 'Tecnologia' }];
  const newsDropDown = newsCategories.map(({ value, show }, key) =>
  (
    <option
      key={ key }
      style={ { backgroundColor: 'black' } }
      value={ value }
    >{ show }</option>
  ),
  );
  useEffect(() => {
    requestNews();
  }, []);
  const generateCards = () => {
    if (allNews) {
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
        )
      );
    }
    return 'Limite de requests diário atingido =(';
  };
  return (
    <section>
      <select
        id='select'
        style={ { backgroundColor: 'black' } }
        onChange={ () => requestNews(document.getElementById('select').value) }>
        { newsDropDown }
      </select>
      { loaded ?
        <div>
          { generateCards() }
        </div> : 'Carregando notícias...' }
    </section>);
};

export default News;

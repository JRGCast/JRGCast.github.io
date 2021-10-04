import { useEffect, useState } from 'react';
import NewsCard from './NewsCard';

const News = () => {
  const [allNews, setAllNews] = useState([]);
  const [loaded, setLoaded] = useState(false);
  // functions
  const requestNews = async (searchCategory = 'technology') => {
    setLoaded(false);
    const url = 'https://jrgcast-gitpages-backend.herokuapp.com/';
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ searchCategory })
    };
    const fetchNews = await fetch(url, options).catch(e => console.log(e));
    const result = await fetchNews.json();
    setAllNews(result.news.articles);
    console.log(result);
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
      <label htmlFor='select'> Pesquise categorias de notícias: { '' }
        <select
          id='select'
          style={ { backgroundColor: 'black' } }
          onChange={ () => requestNews(document.getElementById('select').value) }>
          { newsDropDown }
        </select>
      </label>
      { loaded ?
        <div>
          { generateCards() }
        </div> : 'Carregando notícias...' }
    </section>);
};

export default News;

import { useEffect, useState } from 'react';
import '../scss/News.scss';
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
    setLoaded(true);
  };
  const newsCategories = [
    { value: 'technology', show: 'Tecnologia' },
    { value: 'business', show: 'Negócios' },
    { value: 'entertainment', show: 'Entretenimento' },
    { value: 'general', show: 'Geral' },
    { value: 'health', show: 'Saúde' },
    { value: 'science', show: 'Ciência' },
    { value: 'sports', show: 'Esportes' },
  ];
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
    <section style={ { marginTop: '40px' } }>
      <label htmlFor='select'> Selecione uma das categorias de notícias: (via newsApi) { '' }
        <select
          id='select'
          style={ { backgroundColor: 'black' } }
          onChange={ () => requestNews(document.getElementById('select').value) }>
          { newsDropDown }
        </select>
      </label>
      { loaded ?
        <div className='News-displayNews'>
          { generateCards() }
        </div> : <h4>Carregando notícias...</h4> }
    </section>);
};

export default News;

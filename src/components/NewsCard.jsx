import '../scss/NewsCard.scss';
const NewsCard = ({ source, author, title, description, publishedAt, url, urlToImage }) => {
  const date = new Date(publishedAt);
  const formatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  };
  return (
    <article className='NewsCard-main-wrapper'>
      <h1>{ title }</h1>
      <img src={ urlToImage } alt={ urlToImage } style={ { width: '200px' } } />
      <h3>{ description }</h3>
      <p>{ author === null ? 'Autor desconhecido' : `Autor/Autores: ${author}` }</p>
      <span>Publicado em: { date.toLocaleDateString('en-UK', formatOptions) }</span>
      <br /> <br />
      <a href={ `${url}` }>Link da notícia</a>
    </article >);
};

export default NewsCard;

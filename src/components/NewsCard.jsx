const NewsCard = ({ source, author, title, description, publishedAt, url, urlToImage }) => {
  return (
    <article style={ { width: '500px' } }>
      <h1>{ title }</h1>
      <img src={ urlToImage } alt={ urlToImage } style={ { width: '200px' } } />
      <h3>{ description }</h3>
      <p>{ author === null ? 'Autor desconhecido' : author }</p>
      <span>Publicado em: { publishedAt }</span> <br />
      <a href={ `${url}` }>Link da notícia</a>
    </article >);
};

export default NewsCard;

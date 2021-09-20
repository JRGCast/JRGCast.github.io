const News = () => {
  const { REACT_APP_GNEWSAPIKEY } = process.env;
  const gUrl = "https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=";
  const requestNews = () => {
    const headers = {
      Authorization: REACT_APP_GNEWSAPIKEY
    };
    const fetchNews = async () => fetch(`${gUrl}${REACT_APP_GNEWSAPIKEY}`, headers).then(response => response.json());
    const result = fetchNews();
    return result;
  };
  return (<h1>News { console.log(requestNews()) }</h1>);
};

export default News;

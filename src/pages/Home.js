import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import News from "../components/News";
import './Home.css';
const Home = () => {
  const [loadImg, setLoadImg] = useState(false);

  const constructionImgSrc = "https://www.veggies.org.uk/wp-content/uploads/under-construction.gif";
  useEffect(() => {
    const theImg = new Image();
    theImg.src = constructionImgSrc;
    theImg.onload = () => setLoadImg(true);
  }, []);

  return (<div>
    { loadImg ? <>
      <h1> Opa! DESCULPE PELA BAGUNÇA! </h1>
      <body className='Home-body'>
        <div className='Home-body-img-container'>
          <img className='Home-body-img' src={ constructionImgSrc } alt="In construction, sorry!" />
        </div>
        <p>{ `Nos ajustes finais. Enquanto isso, se quiser pode passear pelos links da barra de navegação acima =) ` } </p>
        <News></News>
      </body>
    </> : <Loading /> }
  </div>);
};

export default Home;

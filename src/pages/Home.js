import { useEffect, useState } from "react";
import Loading from "../components/Loading";
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
        <p>{ "Comecei isto aqui há muito pouco e tem taaaaaaaaanta coisa para consertar! Estou estudando uma nova linguagem e realizando alguns projetos pessoais, mas prometo organizar isso aqui em breve! Enquanto isso, divirta-se com meu joguinho (ainda bem bugado >.<)" }:  <a href="https://jrgcast-pong.vercel.app/" > Pela maior facilidade, coloquei na Vercel</a></p>
      </body>
    </> : <Loading /> }
  </div>);
};

export default Home;

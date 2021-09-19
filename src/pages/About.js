import { useEffect, useState } from 'react';
import Loading from "../components/Loading";
import newProfile from '../images/newProfile.jpeg';
import './About.css';
const About = () => {
  const [loadImg, setLoadImg] = useState(null);
  useEffect(() => {
    const theImg = new Image();
    theImg.src = newProfile;
    theImg.onload = () => setLoadImg(theImg.src);
  }, []);
  return (
    <div>
      { loadImg !== null ?
        <>
          <header className='About-header'>
            <h1 className='About-title'>Quem é João?</h1>
          </header>
          <body className='About-body'>
            <div className='About-body-img-container' >
              <img className='About-body-img' src={ loadImg } onLoad alt='jrgc profile' />
            </div>
            <p> Olá, eu sou o João. Sou advogado em transição de carreira para a área de tecnologia. 
            </p>
            <p>
              Fiz direito com o ideal da busca pela justiça para quem dela necessite e atuei com destemor desde meu primeiro estágio em escritório até 6 (seis) anos com a "vermelhinha". Com o passar dos anos descobri que sou "muito pequeno" diante de tanta injustiça e não poderia continuar atuando da mesma forma.
            </p>
            <p>A área de tecnologia abriu um enorme leque de possibilidades, e cada dia percebo como a programação é uma ferramenta peculiar! Pretendo usá-la como forma de multiplicar os meus eforços, pois, acredito firmemente que podemos mudar o mundo para melhor, e quero utilizar tudo que está ao meu alcance para atingir esse ideal. </p>
          </body>
        </> : <Loading />
      }
    </div >
  );
};

export default About;

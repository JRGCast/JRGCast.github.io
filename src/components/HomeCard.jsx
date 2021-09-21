import { useHistory } from 'react-router';
import './HomeCard.css';
const HomeCard = ({ content }) => {
  const history = useHistory();
  const { title, summary, image, imageAlt, goTo } = content;
  return (
    <section className='HomeCard-section'>
      <div className='HomeCard-container' onClick={ () => history.push(goTo) }>
         <h2>{ title }</h2>
        {/* <p>{ summary }</p> */}
        {/* <figure><img src={ image } alt={ imageAlt } /></figure>  */}
        <span className='HomeCard-span'>Ir para a página</span>
      </div>
    </section>
  );
};

export default HomeCard;

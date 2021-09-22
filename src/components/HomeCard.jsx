import { useHistory } from 'react-router';
import './HomeCard.css';
const HomeCard = ({ content }) => {
  const history = useHistory();
  const { title, symbol, symbolLabel, goTo } = content;
  return (
    <section className='HomeCard-section'>
      <div className='HomeCard-container' onClick={ () => history.push(goTo) }>
        <div className='HomeCard-header-n-img'>
          <h2>{ title }</h2>
          <span style={ { fontSize: '3em' } } role="img" aria-label={ symbolLabel }>{ symbol }</span>
        </div>
        <span className='HomeCard-span'>Ir para a página</span>
      </div>
    </section>
  );
};

export default HomeCard;

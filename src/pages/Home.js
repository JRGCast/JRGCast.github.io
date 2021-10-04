import HomeCard from '../components/HomeCard';
import News from '../components/News';
import { cardContent } from '../projects/homeCardContent';
import './Home.css';
const Home = () => {

  return (
    <main>
      { cardContent.map((elemen, index) => <HomeCard key={ index } content={ elemen } />) }
      <News />
    </main>
  );
};

export default Home;

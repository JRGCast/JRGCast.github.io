import HomeCard from '../components/HomeCard';
import { cardContent } from '../projects/homeCardContent';
import '../scss/Home.scss';
const Home = () => {

  return (
    <main >
      { cardContent.map((elemen, index) => <HomeCard key={ index } content={ elemen } />) }
    </main>
  );
};

export default Home;

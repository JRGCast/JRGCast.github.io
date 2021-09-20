import { NavLink } from "react-router-dom";
import './NavBar.css';
const NavBar = () => {
  const pathNText = [
    { path: '/', innerText: 'Home' },
    { path: '/about', innerText: 'Sobre mim' },
    { path: '/projects', innerText: 'Meus Projetos' },
    { path: '/contactme', innerText: 'Contato' }];
  const navLinkGen = () => pathNText.map(({ path, innerText }) => {
    return (
      <li className='NavBar-li' key={ path }>
        <NavLink to={ path } className='NavBar-link'>{ innerText }</NavLink>
      </li>
    );
  });
  return (
    <ul className='NavBar-display'>
      { navLinkGen() }
    </ul>
  );
};

export default NavBar;

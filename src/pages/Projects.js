import { useState } from "react";
import TrybeProjects from "./TrybeProjects";

const Projects = () => {
  const [currProjs, setCurrProjs] = useState('');
  const handleClick = ({ target }) => setCurrProjs(target.name);

  const showProjs = () => currProjs === 'Trybe' ? <TrybeProjects /> : <h1>'Outros Projetos'</h1>;
  return (
    <section>
      <button style={ { backgroundColor: 'purple' } } name='Trybe' onClick={ (e) => handleClick(e) } type='button'>Trybe</button>
      <button style={ { backgroundColor: 'purple' } } name='Others' onClick={ (e) => handleClick(e) } type='button'>Pessoais</button>
      { showProjs() }
    </section>
  );
};

export default Projects;
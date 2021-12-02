import "./ProjectCard.css";
const ProjectCard = ({ title, level, summary, stack, description, image, site, repository }) => {
  return (
    <section>
      <header>
        <h2>{ summary }</h2>
        <h3> Nível { level }</h3>
        <p>Feito em { stack }</p>
      </header>
      <div style={ { marginBottom: '10px' } }>
        <p>{ description }</p>
        <details><summary> Veja uma amostra: </summary>
          <img className="ProjectCard-image" src={ image } alt={ image } />
        </details>
      </div>
      <footer className="ProjectCard-external-anchor-container">
        <a className="ProjectCard-external-anchor"
          href={ site }
          target="_blank"
          rel="noreferrer noopener">
          <span>Ir ao site</span>
        </a>
        <a className="ProjectCard-external-anchor"
          href={ repository }
          target="_blank"
          rel="noreferrer noopener">
          <span>Ir ao repositório</span>
        </a>
      </footer>
    </section>);
};

export default ProjectCard;

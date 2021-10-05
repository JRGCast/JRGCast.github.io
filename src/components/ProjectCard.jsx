import "./ProjectCard.css";
const ProjectCard = ({ _title, summary, stack, description, image, site, repo }) => {
  return (
    <section>
      <header>
        <h2>{ summary }</h2>
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
          <span>Veja funcionando</span>
        </a>
        <a className="ProjectCard-external-anchor"
          href={ repo }
          target="_blank"
          rel="noreferrer noopener">
          <span>Vá até o repositório</span>
        </a>
      </footer>
    </section>);
};

export default ProjectCard;

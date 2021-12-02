import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { frontProjs } from "../projects/projectsList";
import "../scss/TrybeProjects.scss";
const TrybeProjects = () => {
  const closeDetailsTag = () => document.querySelectorAll('details').forEach(tag => tag.removeAttribute("open"));
  const [indexFrontProjs, setIndexFrontProjs] = useState(0);
  const nextFProj = () => {
    indexFrontProjs < frontProjs.length - 1 ? setIndexFrontProjs(indexFrontProjs + 1) : setIndexFrontProjs(0);
    closeDetailsTag();
  };
  const prevFProj = () => {
    indexFrontProjs > 0 ? setIndexFrontProjs(indexFrontProjs - 1) : setIndexFrontProjs(frontProjs.length - 1);
    closeDetailsTag();
  };

  const mappingProjectList = (projectList) => projectList.map(({ title, level, summary, stack, description, imgSrc, site, repository }) => {
    return <ProjectCard
      title={ title }
      level={ level }
      summary={ summary }
      stack={ stack }
      description={ description }
      image={ imgSrc }
      site={ site }
      repository={ repository } />;
  });

  return (
    <section>
      { console.log(mappingProjectList(frontProjs)) }
      <h1> Meus projetos Trybe</h1>
      <main>
        <section style={ { marginBottom: "20px" } }>
          <div className="TrybeProjects-Trybeprojects-container">
            <header className="TrybeProjects-button-container">
              <button className="TrybeProjects-previous-button" type="button" onClick={ prevFProj }>{ '<<' }</button>
              <h1 className="TrybeProjects-Trybeprojects-title">{ mappingProjectList(frontProjs)[indexFrontProjs].props.title }</h1>
              <button className="TrybeProjects-next-button" type="button" onClick={ nextFProj }>{ '>>' }</button>
            </header>
            <div>
              <span>Projeto { indexFrontProjs + 1 }/{ frontProjs.length } </span>
              { mappingProjectList(frontProjs)[indexFrontProjs] }
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default TrybeProjects;

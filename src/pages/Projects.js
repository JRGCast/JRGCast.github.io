import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { frontProjs } from "../projects/projectsList";
import "./Projects.css";
const Projects = () => {
  const [indexFrontProjs, setIndexFrontProjs] = useState(0);
  const [indexBackProjs, setIndexBackProjs] = useState(0);
  const nextProj = () => {
    indexFrontProjs < frontProjs.length - 1 ? setIndexFrontProjs(indexFrontProjs + 1) : setIndexFrontProjs(0);
    console.log(mappingProjectList(frontProjs)[indexFrontProjs].props);
  };
  const prevProj = () => {
    indexFrontProjs > 0 ? setIndexFrontProjs(indexFrontProjs + 1) : setIndexFrontProjs(frontProjs.length - 1);
    console.log(mappingProjectList(frontProjs)[indexFrontProjs].props);
  };

  const mappingProjectList = (projectList) => projectList.map(({ title, summary, stack, description, imgSrc, site, repo }) => {
    return <ProjectCard
      title={ title }
      summary={ summary }
      stack={ stack }
      description={ description }
      image={ imgSrc }
      site={ site }
      repo={ repo } />;
  });
  return (
    <section>
      <h1>Meus projetos</h1>
      <main>
        <section>
          <details>
            <summary>Front-End</summary>
            <div className="Projects-projects-container">
              <header className="Projects-button-container">
                <button className="Projects-previous-button" type="button" onClick={ prevProj }>{ '<<' }</button>
                <h1 className="Projects-projects-title">{ mappingProjectList(frontProjs)[indexFrontProjs].props.title }</h1>
                <button className="Projects-next-button" type="button" onClick={ nextProj }>{ '>>' }</button>
              </header>
              <div>
                { mappingProjectList(frontProjs)[indexFrontProjs] }
              </div>
            </div>
          </details>
        </section>
      </main>
    </section>
  );
};

export default Projects;

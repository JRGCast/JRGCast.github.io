import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ProjectCard from "../components/ProjectCard";
import { frontProjs } from "../projects/projectsList";
import "./Projects.css";
const Projects = () => {
  const [indexFrontProjs, setIndexFrontProjs] = useState(0);
  const [allProjs, setAllProjs] = useState([]);
  const [projsLoaded, setProjsLoaded] = useState(false);
  const nextFProj = () => {
    indexFrontProjs < allProjs.length - 1 ? setIndexFrontProjs(indexFrontProjs + 1) : setIndexFrontProjs(0);
  };
  const prevFProj = () => {
    indexFrontProjs > 0 ? setIndexFrontProjs(indexFrontProjs - 1) : setIndexFrontProjs(frontProjs.length - 1);
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

  useEffect(() => {
    console.log(allProjs);
    setAllProjs(frontProjs);
    (setProjsLoaded(true));
  }, [allProjs]);

  return (
    <section>
      { projsLoaded ?
        <>
          <h1> Meus projetos</h1>
          <main>
            <section style={ { marginBottom: "20px" } }>
              <div className="Projects-projects-container">
                <header className="Projects-button-container">
                  <button className="Projects-previous-button" type="button" onClick={ prevFProj }>{ '<<' }</button>
                  <h1 className="Projects-projects-title">{ mappingProjectList(allProjs)[indexFrontProjs].props.title }</h1>
                  <button className="Projects-next-button" type="button" onClick={ nextFProj }>{ '>>' }</button>
                </header>
                <div>
                  { mappingProjectList(allProjs)[indexFrontProjs] }
                </div>
              </div>
            </section>
          </main>
        </> : <Loading /> }
    </section>
  );
};

export default Projects;

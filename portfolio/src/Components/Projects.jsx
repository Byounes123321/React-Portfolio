import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    async function getProjects() {
      try {
        const response = await fetch("https://console.bassilyounes.com/api/projects");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
    }

    getProjects();
  }, []);

  console.log("projects: ", projects);


  return (
    <>
      <div>
        <h2 id="projects">Projects</h2>
      </div>

      {projects ? (
        <>
          {projects.map((project) => {
              return (
                      <div className="projects">
                          <div className="projImgs">
                              <img className="projectimg" src={project.image} alt="" />
                              <div className="projectSkills">
                                  {project.skills.map((skill) => (
                                      <>
                                          <img src={`https://console.bassilyounes.com/storage/${skill.logo}`} alt={skill.name}/>
                                      </>
                                  ))}
                              </div>
                          </div>
                          <div className="projDesc">
                              <div>
                                  <h3>{project.title}</h3>
                              </div>
                              <div>
                                  <p>{project.content}</p>
                              </div>
                          </div>
                      </div>
              );
          })}
        </>
      ) : (
        <p>Loading projects...</p>
      )}
    </>
  );
}

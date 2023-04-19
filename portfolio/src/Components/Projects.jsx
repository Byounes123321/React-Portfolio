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
        <ul>
          {projects.map((project) => {
              return (
                  <li key={project.id}>
                      <div className="projects">
                          <div className="projImgs">
                              <img className="projectimg" src="https://aeroclub-issoire.fr/wp-content/uploads/2020/05/image-not-found.jpg" alt="" />
                              <div className="projectSkills">
                                  {project.skills.map((skill) => (
                                      <>
                                          <p>{skill.name}</p>
                                          <img src="https://aeroclub-issoire.fr/wp-content/uploads/2020/05/image-not-found.jpg" alt="" />
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
                  </li>
              );
          })}
        </ul>
      ) : (
        <p>Loading projects...</p>
      )}
    </>
  );
}

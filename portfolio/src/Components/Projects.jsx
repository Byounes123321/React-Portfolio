import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState(null);
  const github = {
    Portfolio: "https://github.com/Byounes123321/React-Portfolio",
    "BrickMMO GPS": "https://github.com/Byounes123321/BRICKMMO-GPS",
    "Music-Weather App":
      "https://github.com/Byounes123321/Music-Weather-nodeAPP-",
    "Shoe Shop": "https://github.com/Byounes123321/ShoeShop-Node.js_App",
    "UFO CSS Animation": "https://github.com/Byounes123321/CSSAnimations",
    "Gift Stack": "https://github.com/Byounes123321/GiftStack-PassionProject",
  };
  useEffect(() => {
    async function getProjects() {
      try {
        const response = await fetch(
          "https://console.bassilyounes.com/api/projects"
        );
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
          {projects.map((project, index) => {
            return (
              <div className="projects">
                <div className="projImgs">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="projimga"
                  >
                    <img className="projectimg" src={project.image} alt="" />
                    {/* <img className="gitimg" src="" alt="" /> */}
                  </a>
                  <div className="projectSkills">
                    {project.skills.map((skill) => (
                      <>
                        <a href={skill.url} target="_blank" rel="noreferrer">
                          <img
                            src={`https://console.bassilyounes.com/storage/${skill.logo}`}
                            alt={skill.name}
                          />
                        </a>
                      </>
                    ))}
                  </div>
                </div>
                <div className="projDesc">
                  <div>
                    <h3>
                      <a
                        href={github[project.title]}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project.title}
                      </a>
                    </h3>
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

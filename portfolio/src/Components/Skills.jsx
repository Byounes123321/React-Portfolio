import { useEffect, useState } from "react";

export default function Skills() {
  const [skill, setSkill] = useState([]);

  useEffect(() => {
    async function getSkill() {
      try {
        const response = await fetch(
          "https://console.bassilyounes.com/api/skills"
        );
        const data = await response.json();
        setSkill(data);
      } catch (error) {
        console.error(error);
      }
    }

    getSkill();
  }, []);

  console.log("Skills: ", skill);

  return (
    <div className="skills">
      <h2 id="skills">Skills</h2>
      <div className="skillsContainer">
        {skill.map((item, index) => (
          <div className="skillitem" key={index}>
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              title={item.name}
            >
              <img
                src={`https://console.bassilyounes.com/storage/${item.logo}`}
                alt={item.name}
              />
            </a>
            <div className="progOutline">
              <div
                className="progress"
                style={{ width: `${item.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

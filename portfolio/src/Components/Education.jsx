import { useEffect, useState } from "react";

export default function Education({ imgSize }) {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    async function getEducation() {
      try {
        const response = await fetch(
          "https://console.bassilyounes.com/api/education"
        );
        const data = await response.json();
        setEducation(data);
      } catch (error) {
        console.error(error);
      }
    }

    getEducation();
  }, []);

  return (
    <div className="education">
      <h2 id="education">Education</h2>
      {education.map((item, index) => {
        if (imgSize > 900) {
          return (
            <div className="eduItem" key={index}>
              <img
                src={`https://console.bassilyounes.com/storage/${item.image}`}
                alt={item.school}
              />
              <div className="eduDesc">
                <div className="school">{item.school}</div>
                <div className="degree">{item.credentials}</div>
                <div className="time">Start: {item.startDate}</div>
                <div className="time">End: {item.endDate}</div>
                <div className="schoolDesc">{item.description}</div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="eduItem" key={index}>
              <div className="eduDesc">
                <div className="school">{item.school}</div>
                <div className="degree">{item.credentials}</div>
                <div className="time">Start: {item.startDate}</div>
                <div className="time">End: {item.endDate}</div>
                <div className="schoolDesc">{item.description}</div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

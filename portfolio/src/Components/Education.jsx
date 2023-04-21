import { useEffect, useState } from "react";

export default function Education() {
    const [education, setEducation] = useState([]);
  
    useEffect(() => {
      async function getEducation() {
        try {
          const response = await fetch("https://console.bassilyounes.com/api/education");
          const data = await response.json();
          setEducation(data);
        } catch (error) {
          console.error(error);
        }
      }
  
      getEducation();
    }, []);
  
    console.log("Education: ", education);
  
    return (
      <div className="education">
        <h2 id="education">Education</h2>
        {education.map((item, index) => (
          <div className="eduItem" key={index}>
                <img src={`https://console.bassilyounes.com/storage/${item.image}`} alt="" />
            <div className="eduDesc">   
                <div className="school">{item.school}</div>
              <div className="degree">{item.credentials}</div>
              <div className="time">Start: {item.startDate}</div>
              <div className="time">End: {item.endDate}</div>
              <div className="schoolDesc">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
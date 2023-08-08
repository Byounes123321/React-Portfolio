import companyLogo from "./imgs/CompanyLogo.png";

export default function Experience() {
  return (
    <div className="education">
      <h2 id="experience">Experience</h2>
      <div className="eduItem">
        <img src={companyLogo} alt="Company Logo" />
        <div className="eduDesc">
          <div className="school">BlueBird IT Solutions</div>
          <div className="degree">Software Developer (Summer Internship)</div>
          <div className="time">Start: July 2023</div>
          <div className="time">End: August 2023</div>
          <div className="schoolDesc">
            Participated in the development of an internal web application
            designed to manage customer billings and payments. Some of the tasks
            I was assigned to do were: Implementing and interacting with APIs,
            creating components, writing documentation, and writing unit tests.
            Technologies used: Next.js, SQL, TypeScript, AntD, Jest, Docker,
            Java, Spring Boot, and Git.
          </div>
        </div>
      </div>
    </div>
  );
}

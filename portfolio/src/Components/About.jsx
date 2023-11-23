import headshot from "./imgs/HeadShot.jpg";
export default function About() {
  return (
    <>
      <div id="about">
        <h2>About Me</h2>
      </div>
      <div className="about">
        <p>
          Hello, I'm Bassil Younes! I'm a Web Developer and recent grad from Humber
          College with a passion for coding, video games, baking, and parkour.
          With an advanced diploma in entrepreneurship and small business admin, I
          have developed a keen eye for problem-solving and creating value for
          users. I love solving coding challenges and building web-based
          applications because it allows me to create innovative solutions and
          bring ideas to life. When I'm not coding, you can find me baking some
          bread, doing some flips outside or playing my favourite video games.
          I'm excited to connect with professionals in the tech industry and
          learn from them, as well as contribute to exciting projects that push
          the boundaries of what's possible with technology.
        </p>
        <img src={headshot} alt="not found" />
      </div>
    </>
  );
}

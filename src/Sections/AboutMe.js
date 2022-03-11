import SectionHeading from "../Elements/SectionHeading";
import FontAwesomeIcon from "../Elements/FontAwesomeIcon";
const AboutMe = () => {
  return (
    <section id="About">
      <div className="container-lg">
        <SectionHeading
          Name="About Me"
          SVGid="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"
        />

        <div
          className="card shadow-sm mx-auto text-center"
          style={{ maxWidth: "1000px" }}>
          <div className="card-header">Quick About Me</div>
          <div className="card-body">
            <p className="card-text">
              My name is Leroy Bowmaker and my goal is to create beautiful apps
              that are appealing to the eye and don't compromise on
              functionality. I specialise in web development using the C# .NET
              and React stack to accomplish my projects! My Passion for tech is
              what drives me to be able to accomplish my goals within the tech
              industry each day. You can also check out my CV online with the
              link below.
            </p>
            <a
              href="http://leroybowmaker.tech/resume.pdf"
              className="btn btn-primary split-btn ms-auto text-white">
              <FontAwesomeIcon IconClassName="fa-file-pdf" />
              <span>Download Resume!</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

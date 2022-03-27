import SectionHeading from "../Elements/SectionHeading";
import FontAwesomeIcon from "../Elements/FontAwesomeIcon";
const AboutMe = () => {
  return (
    <section id="About">
      <div className="container-lg">
        <SectionHeading
          Name="About Me"
          SVGid="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z"
        />

        <div
          className="card shadow-sm mx-auto text-center"
          style={{ maxWidth: "1000px" }}>
          <div className="card-header">Quick About Me</div>
          <div className="card-body">
            <p className="card-text">
              My name is Leroy! and my goal is to create beautiful web apps that
              are appealing to the eye and don't compromise on functionality. I
              specialise in web development primarily using C# .NET and React
              stack to accomplish my projects! My Passion for tech is what
              drives me to be able to accomplish my goals within the tech
              industry each day.
            </p>
            <p className="card-text">
              Please have a squizz at what projects I've currently done down
              below! Be sure to check back often as I'm always creating new and
              fun projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

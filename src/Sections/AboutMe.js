import SectionHeading from "../Elements/SectionHeading";
const AboutMe = () => {
  return (
    <section id="About">
      <div className="container-lg">
        <SectionHeading
          Name="About Me"
          SVGid="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"
        />

        <div className="card shadow-sm">
          <div className="card-header">Featured</div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <h5 className="card-title fw-bold text-secondary">
                  Quick about me.
                </h5>
                <p className="card-text">
                  My name is Leroy Bowmaker and my goal is to create beautiful
                  software thats appealing to the eye that doesnt compromise on
                  functionality. I Specialise in web development using the C#
                  .NET and React stack to accomplish my projects! My Passion for
                  tech is what drives me to be able to accomplish my goals
                  within the tech industry each day. You can also check out my
                  CV online with the link below
                </p>
                <a
                  href="http://leroybowmaker.tech/resume.pdf"
                  className="btn btn-primary ms-auto text-white">
                  Download Resume!
                </a>
              </div>
              <div className="col">
                <h5 className="card-title fw-bold">What Can I Do?</h5>
                <p className="card-text">
                  <ul>
                    <li>Fullstack Web Development</li>
                    <li>Linux and Windows Server Administration</li>
                    <li>Computer Software and Hardware related repairs</li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

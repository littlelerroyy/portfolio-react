const Home = () => {
  return (
    <section id="Home" className="px-0 py-0">
      <div
        className="container-lg d-flex justify-content-center"
        style={{ height: "inherit" }}>
        <div className="mx-auto my-auto text-white text-center">
          <h2>I'm Leroy Bowmaker</h2>
          <h2>I'm a Fullstack Web Developer</h2>
          <a
            href="#About"
            className="btn btn-primary mx-2 my-2 text-white shadow-sm">
            About Me
          </a>
          <a
            href="#Projects"
            className="btn btn-primary mx-2 my-2 text-white shadow-sm">
            My Projects
          </a>
          <a
            href="#Contact"
            className="btn btn-primary mx-2 my-2 text-white shadow-sm">
            Contact Me!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

import SectionHeading from "../Elements/SectionHeading";

const Contact = () => {
  return (
    <section className="bg-light" id="Contact">
      <SectionHeading
        Name="Contact Me!"
        SVGid="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"
      />
      <div className="container-sm">
        <div className="card shadow-sm mx-auto" style={{ maxWidth: "700px" }}>
          <div className="card-header">Quick Mail Form</div>
          <div className="card-body">
            <form
              id="contactForm"
              action="https://formsubmit.co/cb5109dba7100c27c5fe5ef7293e8cd0"
              method="POST">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your Email address
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  type="text"
                  className="form-control form-control-lg"></textarea>
              </div>

              <input
                type="hidden"
                name="_next"
                value="http://leroybowmaker.tech/thanks"
              />

              <button
                type="submit"
                className="btn btn-primary text-white float-end">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

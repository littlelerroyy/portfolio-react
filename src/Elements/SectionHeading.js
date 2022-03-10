const SectionHeading = ({ Name, SVGid }) => {
  return (
    <>
      <h2 className="page-section-heading text-center text-uppercase text-primary mb-0">
        {Name}
      </h2>

      <div className="divider-custom">
        <div className="divider-custom-line"></div>
        <div className="divider-custom-icon">
          <svg
            className="svg-inline--fa fa-project-diagram fa-w-20"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="project-diagram"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            data-fa-i2svg="">
            <path fill="currentColor" d={SVGid}></path>
          </svg>
        </div>
        <div className="divider-custom-line"></div>
      </div>
    </>
  );
};

export default SectionHeading;

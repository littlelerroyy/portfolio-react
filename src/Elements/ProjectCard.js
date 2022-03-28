const ProjectCard = ({ Title, imgURL, URL, Description }) => {
  return (
    <div className="col">
      <div className="card project-card shadow-sm">
        <div
          className="card-img-top"
          style={{ backgroundImage: `url(${imgURL})` }}></div>
        <div className="card-body ">
          <button
            type="button"
            href={URL}
            className="btn btn-primary float-end text-white ms-2 shadow-sm"
            data-bs-toggle="modal"
            data-bs-target={URL}>
            More Info
          </button>
          <h5 className="card-title">{Title}</h5>
          <p className="card-text">{Description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

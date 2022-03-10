const ProjectCard = ({ Title, imgURL, URL, Description }) => {
  return (
    <div className="col">
      <div class="card project-card shadow-sm">
        <div
          class="card-img-top"
          style={{ backgroundImage: `url(${imgURL})` }}></div>
        <div class="card-body ">
          <button
            type="button"
            href={URL}
            className="btn btn-primary float-end text-white ms-2"
            data-bs-toggle="modal"
            data-bs-target={URL}>
            More Info
          </button>
          <h5 class="card-title">{Title}</h5>
          <p class="card-text">{Description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

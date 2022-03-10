const TechIcon = ({ Name, imgURL }) => {
  return (
    <div className="tech-icon">
      <div
        class="img ms-auto"
        style={{ backgroundImage: `url(${imgURL})` }}></div>
      <span>{Name}</span>
    </div>
  );
};

export default TechIcon;

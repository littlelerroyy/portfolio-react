const TechIcon = ({ Name, imgURL }) => {
  return (
    <div className="tech-icon">
      <div
        className="img ms-auto"
        setinterval={(e) => {
          console.log(e);
        }}
        style={{ backgroundImage: `url(${imgURL})` }}></div>
      <span>{Name}</span>
    </div>
  );
};

export default TechIcon;

const TechIcon = ({ Name, imgURL }) => {
  const AnimateIcon = (e: Event) => {
    setInterval(function () {
      e.target.classList.add("flipXaxis");
    }, 1000);
  };

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

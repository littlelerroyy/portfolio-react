import FontAwesomeIcon from "../Elements/FontAwesomeIcon";
const Footer = () => {
  return (
    <footer className="bg-primary text-center text-white text-lg-start">
      <div className="text-center">
        <h4 style={{ fontSize: "2rem" }}>Find Me On</h4>
        <div>
          <a href="https://github.com/littlelerroyy/" target="_blank">
            <FontAwesomeIcon IconClassName="fa-github" />
          </a>
          <a href="https://linkedin.com/in/leroyb1/" target="_blank">
            <FontAwesomeIcon IconClassName="fa-linkedin" />
          </a>
        </div>
      </div>
      <div className="text-center p-3">
        © {new Date().getFullYear()} Copyright Leroy Bowmaker. All Rights
        Reserved
        <br />
        Designed by Leroy Bowmaker
      </div>
    </footer>
  );
};

export default Footer;

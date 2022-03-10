const Footer = () => {
  return (
    <footer className="bg-primary text-center text-white text-lg-start">
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

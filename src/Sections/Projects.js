import SectionHeading from "../Elements/SectionHeading";
import ProjectCard from "../Elements/ProjectCard";
import ProjectModal from "../Elements/ProjectModal";
import { TechLogos } from "./Skills";

////IMG import
import AllClearIMG from "../assets/img/portfolio/allclear.jpg";
import AWGNIMG from "../assets/img/portfolio/awgn.jpg";
import KernelIMG from "../assets/img/portfolio/kernel.jpg";
import MarsRoverIMG from "../assets/img/portfolio/marsrover.jpg";
import PoolifyIMG from "../assets/img/portfolio/poolify.jpg";
import PortfolioIMG from "../assets/img/portfolio/portfolio.jpg";
import RedicoIMG from "../assets/img/portfolio/redico.jpg";

//Project List
const ProjectCardList = [
  {
    Title: "Poolify",
    imgURL: PoolifyIMG,
    URL: "#Poolify",
    Description: "Pool and Spa Scheduling Software",
  },
  {
    Title: "Mars Rover Console App",
    imgURL: MarsRoverIMG,
    URL: "#MarsRover ",
    Description: "Console Mars Rovers within a console!",
  },
  {
    Title: "Portfolio Website",
    imgURL: PortfolioIMG,
    URL: "#PortfolioWebsite",
    Description: "Portfolio website built by me!",
  },
  {
    Title: "AWGN",
    imgURL: AWGNIMG,
    URL: "#AWGN",
    Description: "eSports Community Website",
  },
  {
    Title: "Redico Productions",
    imgURL: RedicoIMG,
    URL: "#Redico",
    Description: "Company Website",
  },
  {
    Title: "All Clear Pool Supplies",
    imgURL: AllClearIMG,
    URL: "#AllClear",
    Description: "Company Website",
  },
  {
    Title: "Kernel Modification",
    imgURL: KernelIMG,
    URL: "#KernelMod",
    Description: "Kernel Mod for the HTC Senstion",
  },
];

//Project List
const ProjectModalList = [
  {
    Title: "Poolify",
    imgURL: PoolifyIMG,
    ID: "Poolify",
    Description:
      "Poolify is a in-field job scheduling software that allows pool business to manage their clients and create jobs at specific locations. The software allows the business to invoice for their work and products purchased by customers.",
    Links: { Preview: "http://poolify.leroybowmaker.tech", Github: null },
    Techlogos: TechLogos.filter(
      (x) =>
        x.Name === "C#" ||
        x.Name === ".NET Core" ||
        x.Name === "MySQL" ||
        x.Name === "MVC" ||
        x.Name === "TypeScript" ||
        x.Name === "MySQL" ||
        x.Name === "React" ||
        x.Name === "Bootstrap" ||
        x.Name === "Visual Studio" ||
        x.Name === "Razor Pages"
    ),
  },
  {
    Title: "Mars Rover Console App",
    imgURL: MarsRoverIMG,
    ID: "MarsRover",
    Description:
      "A console application that allows you to traverse up to 3 Mars Rovers on a virtual grid. The program uses a customizable grid size within the source code and unit tests to certify that the commands issued to the mars rovers indeed function as intended.",
    Links: {
      Preview:
        "https://github.com/littlelerroyy/Mars-Rover-Expedition/releases/tag/v1.0.0",
      Github: "https://github.com/littlelerroyy/Mars-Rover-Expedition",
    },
    Techlogos: TechLogos.filter((x) => x.Name === "C#"),
  },
  {
    Title: "Portfolio Website",
    imgURL: PortfolioIMG,
    ID: "PortfolioWebsite",
    Description:
      "Portfolio website designed and developed by me! All content is hosted in an AWS EC2 Instance server.",
    Links: {
      Preview: null,
      Github: "https://github.com/littlelerroyy/portfolio-react",
    },
    Techlogos: TechLogos.filter(
      (x) =>
        x.Name === "React" ||
        x.Name === "HTML" ||
        x.Name === "CSS" ||
        x.Name === "Bootstrap" ||
        x.Name === "Linux" ||
        x.Name === "Apache" ||
        x.Name === "AWS"
    ),
  },
  {
    Title: "AWGN Website",
    imgURL: AWGNIMG,
    ID: "AWGN",
    Description:
      "A gaming community that brings community gamers together to provide a unique gaming experience into organised competitions allowing players to win awards for their efforts. The site also featured a dedicated news page to update gamers of recent gaming and PC tech news.",
    Links: {
      Preview:
        "https://web.archive.org/web/20190213021322/http://www.awgn.net/",
      Github: null,
    },
    Techlogos: TechLogos.filter(
      (x) =>
        x.Name === "PHP" ||
        x.Name === "MySQL" ||
        x.Name === "HTML" ||
        x.Name === "CSS" ||
        x.Name === "jQuery"
    ),
  },
  {
    Title: "Redico Productions",
    imgURL: RedicoIMG,
    ID: "Redico",
    Description:
      "A website created for a media production company to display their vision, services and goals.",
    Links: {
      Preview: "https://redico.leroybowmaker.tech",
      Github: null,
    },
    Techlogos: TechLogos.filter(
      (x) => x.Name === "HTML" || x.Name === "CSS" || x.Name === "jQuery"
    ),
  },
  {
    Title: "All Clear Pool Supplies",
    imgURL: AllClearIMG,
    ID: "AllClear",
    Description:
      "Website designed and built for a Pool retail business displaying their products and services.",
    Links: {
      Preview: "https://www.allclearpoolsupplies.com.au",
      Github: null,
    },
    Techlogos: TechLogos.filter(
      (x) =>
        x.Name === "PHP" ||
        x.Name === "MySQL" ||
        x.Name === "HTML" ||
        x.Name === "CSS" ||
        x.Name === "Javascript"
    ),
  },
  {
    Title: "Kernel Modification",
    imgURL: KernelIMG,
    ID: "KernelMod",
    Description:
      "This kernel mod was designed to speed up overall UI experience of the phone using an updated operating system while providing the added benefit of better battery life via altering CPU and GPU behaviour.",
    Links: {
      Preview:
        "https://forum.xda-developers.com/t/kernel-3-4-cm12-ivanichs-cm12-kernel-overclocked-by-little-lerroyy-1-8-15.3048227/",
      Github: "https://github.com/littlelerroyy/android_kernel_htc_pyramid",
    },
    Techlogos: TechLogos.filter((element) => element.Name === "Git"),
  },
];

const Projects = () => {
  return (
    <section id="Projects">
      <div className="container-lg">
        <SectionHeading
          Name="My Projects"
          SVGid="M0 80C0 53.49 21.49 32 48 32H144C170.5 32 192 53.49 192 80V96H384V80C384 53.49 405.5 32 432 32H528C554.5 32 576 53.49 576 80V176C576 202.5 554.5 224 528 224H432C405.5 224 384 202.5 384 176V160H192V176C192 177.7 191.9 179.4 191.7 180.1L272 288H368C394.5 288 416 309.5 416 336V432C416 458.5 394.5 480 368 480H272C245.5 480 224 458.5 224 432V336C224 334.3 224.1 332.6 224.3 331L144 224H48C21.49 224 0 202.5 0 176V80z"
        />
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {ProjectCardList.map((element, index) => {
            return (
              <ProjectCard
                key={index}
                Title={element.Title}
                imgURL={element.imgURL}
                URL={element.URL}
                Description={element.Description}
              />
            );
          })}
        </div>
      </div>

      {ProjectModalList.map((element, index) => {
        return (
          <ProjectModal
            key={index}
            Title={element.Title}
            ModalID={element.ID}
            imgURL={element.imgURL}
            Description={element.Description}
            Links={element.Links}
            TechIcons={element.Techlogos}
          />
        );
      })}
    </section>
  );
};

export default Projects;

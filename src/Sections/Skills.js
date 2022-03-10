import SectionHeading from "../Elements/SectionHeading";
import TechIcon from "../Elements/TechIcon";
//img imports
import ApacheLogo from "../assets/img/tech/apache.png";
import AWSLogo from "../assets/img/tech/aws.png";
import BootstrapLogo from "../assets/img/tech/bootstrap.png";
import CLogo from "../assets/img/tech/c.png";
import CSharpLogo from "../assets/img/tech/csharp.png";
import CSSLogo from "../assets/img/tech/css.png";
import GitLogo from "../assets/img/tech/git.png";
import HTMLLogo from "../assets/img/tech/html.png";
import JavascriptLogo from "../assets/img/tech/javascript.png";
import jQueryLogo from "../assets/img/tech/jquery.png";
import LinuxLogo from "../assets/img/tech/linux.png";
import MysqlLogo from "../assets/img/tech/mysql.png";
import MVCLogo from "../assets/img/tech/mvc.png";
import NetCoreLogo from "../assets/img/tech/netcore.png";
import PhotoshopLogo from "../assets/img/tech/photoshop.png";
import PHPLogo from "../assets/img/tech/php.png";
import RazerLogo from "../assets/img/tech/razor.png";
import ReactLogo from "../assets/img/tech/react.png";
import TypeScriptLogo from "../assets/img/tech/typescript.png";
import VisualSudioLogo from "../assets/img/tech/visualstudio.png";
import React from "react";

export const TechLogos = [
  { Name: "Apache", imgURL: ApacheLogo },
  { Name: "AWS", imgURL: AWSLogo },
  { Name: "Bootstrap", imgURL: BootstrapLogo },
  { Name: "C#", imgURL: CSharpLogo },
  { Name: "CSS", imgURL: CSSLogo },
  { Name: "Git", imgURL: GitLogo },
  { Name: "HTML", imgURL: HTMLLogo },
  { Name: "Javascript", imgURL: JavascriptLogo },
  { Name: "jQuery", imgURL: jQueryLogo },
  { Name: "Linux", imgURL: LinuxLogo },
  { Name: "MySQL", imgURL: MysqlLogo },
  { Name: "MVC", imgURL: MVCLogo },
  { Name: ".NET Core", imgURL: NetCoreLogo },
  { Name: "Photoshop", imgURL: PhotoshopLogo },
  { Name: "PHP", imgURL: PHPLogo },
  { Name: "Razor", imgURL: RazerLogo },
  { Name: "React", imgURL: ReactLogo },
  { Name: "TypeScript", imgURL: TypeScriptLogo },
  { Name: "Visual Studio", imgURL: VisualSudioLogo },
];

const Skills = () => {
  return (
    <>
      <section id="Skills" className="bg-light">
        <div className="container-lg">
          <SectionHeading
            Name="Skills"
            SVGid="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
          />

          <div className="tech-icon-list mb-3 text-center">
            {TechLogos.map((element, index) => {
              return (
                <TechIcon
                  key={index}
                  Name={element.Name}
                  imgURL={element.imgURL}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;

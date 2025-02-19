import React from "react";
import hrm from "../../src/assets/hrm.png";
import sc from "../../src/assets/sc.png";
import mascot from "../../src/assets/mascot.png";
import enviroodash from "../../src/assets/envrioodash.png";
import enviroo from "../../src/assets/envrioo.png";
import soman from "../../src/assets/soman.png";

export default function Projects() {
  const projectData = [
    {
      image: hrm,
      alt: "HRM Dashboard",
      title: "This is Codeworld HRM Dashboard for Employees",
      link: "https://hrm.codeworld.co.in/App/login",
      name: "Codeworld HRM",
    },
    {
      image: sc,
      alt: "Shrushti Construction",
      title: "This is Shrushti Construction Landing Page Website",
      link: "https://demo.codeworld.co.in/shrushticonstruction/",
      name: "Shrushti Construction",
    },
    {
      image: mascot,
      alt: "Mascot",
      title: "This is Mascot Website for Machinery",
      link: "https://demo.appgurukul.com/mascot2/App",
      name: "Mascot",
    },
    {
      image: enviroodash,
      alt: "Enviroo Dashboard",
      title: "This is Enviroo Ecommerce Dashboard",
      link: "https://envirooeco.com/Admin/App/index",
      name: "Ecommerce Dashboard",
    },
    {
      image: enviroo,
      alt: "Enviroo Eco",
      title: "This is Enviroo Ecommerce Website",
      link: "https://envirooeco.com/",
      name: "Enviroo Eco",
    },
    {
      image: soman,
      alt: "Soman Naravane",
      title: "This is Soman Naravane Kulvrutant Family tree Website",
      link: "https://somannaravanekulvrutant.com/App",
      name: "Soman Naravane",
    },
  ];

  return (
    <section id="projects">
      <h5>Internship Projects</h5>
      <h2>Completed Websites during Internship</h2>

      <div className="container projects_coatainer">
        {projectData.map((project, index) => (
          <article key={index} className="projects_item">
            <div className="projects_item-image">
              <img src={project.image} alt={project.alt} />
            </div>
            <h3>{project.title}</h3>
            <a
              href={project.link}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.name}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

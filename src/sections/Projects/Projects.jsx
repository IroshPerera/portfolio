import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/home-heaven.png";
import freshBurger from "../../assets/hello-shoe.png";
import hipsster from "../../assets/sampath-app.png";
import fitLift from "../../assets/te-img.png";
import ProjectCard from "../../common/ProjectCard";
import { FiGithub } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Latest Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://github.com/IroshPerera/mern-home-heaven-app"
          h3="Home Heaven"
          p="MERN Stack"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/IroshPerera/hello_shoe_pvt_ltd_project_frontend"
          h3="Hello Shoe"
          p="Shoe Store"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/IroshPerera/sampath-bank-mobile-app-clone"
          h3="Mobile App Clone"
          p="Sampath Bank"
        />
        <ProjectCard
          src={fitLift}
          link=""
          h3="TE Project"
          p="Factory Management"
        />
      </div>
      <a href="https://github.com/IroshPerera">
          <button className="hover"><AiFillGithub/> Show More</button>
        </a>
    </section>
  );
}

export default Projects;

import React, { useEffect } from "react";
import styles from "./about.module.css";
import AOS from "aos";
import "aos/dist/aos.css";


import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function About() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">About</h1>
      <p className={styles.description} data-aos="fade-up">
        "Hello, I'm Irosh Perera, a software engineering student with a passion
        for full-stack development. I am dedicated to using my skills to create
        innovative solutions that make a positive impact. Currently, I am
        seeking an internship opportunity where I can further develop my
        expertise in full-stack development and contribute to exciting projects
        that drive growth and innovation."
        <br />
        <a href="https://github.com/IroshPerera">
          <FaGithub style={{ margin: 20, fontSize: 30 }} />
        </a>
        <a href="https://www.linkedin.com/in/irosh-perera-59481727b/">
          <FaLinkedin style={{ margin: 20, fontSize: 30 }} />
        </a>
      </p>
      <hr />
    </section>
  );
}

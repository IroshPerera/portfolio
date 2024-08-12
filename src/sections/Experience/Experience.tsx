import React, { useEffect } from "react";
import styles from "./experience.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Experience() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="experience" className={styles.container} >
      <h1 className="sectionTitle">Experience</h1>
      <div className={styles.experienceItem} data-aos="flip-up">
        <div className={styles.textContent}>
          <div className={styles.imageContainer}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnZlTqMAf9d-VDicw4B0wtfq4tqSs84QYqHg&s"
              alt="Institute of Software Engineering"
            />
          </div>
          <h2>Demonstrator</h2>
          <h3>Institute of Software Engineering (IJSE)</h3>
          <p>2023 – 2024</p>
        </div>
      </div>
    </section>
  );
}

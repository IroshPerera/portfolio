import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



function ProjectCard({ src, link, h3, p }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <a
      href={link}
      target="_blank"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default ProjectCard;

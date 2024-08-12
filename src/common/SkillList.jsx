import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


function SkillList({ icon, skill }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <span data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
      {icon}
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;

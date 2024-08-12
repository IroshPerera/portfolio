import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>Contact: (+94) 70 281 1687</p>
      <p>
        Email:{" "}
        <a href="mailto:harris.johnsen@example.com">
         iroshlashan31@gmail.com
        </a>
      </p>
      <p>
        <a
          href="https://github.com/IroshPerera"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />{" "}IroshPerera
        </a>{" "}
        |
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/irosh-perera-59481727b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
          {" "}
          IroshPerera
        </a>
      </p>
    </section>
  );
}

export default Footer;

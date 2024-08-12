import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';
import { RiAnchorLine, RiBootstrapLine, RiCss3Line, RiHtml5Line, RiJavaLine, RiJavascriptLine, RiNodejsLine, RiReactjsFill, RiReactjsLine, RiSparkling2Line, RiTailwindCssLine, RiTyphoonLine } from "react-icons/ri";
import { SiExpress, SiFlutter, SiMicrosoftazure, SiMysql, SiPostman, SiSpring, SiTypescript } from "react-icons/si";
import { FaDigitalOcean, FaGithub, FaGitSquare, FaNodeJs, FaPython, FaWindows } from 'react-icons/fa';
import { TbBrandReactNative } from 'react-icons/tb';
import { BiLogoMongodb } from 'react-icons/bi';
import { FcLinux } from 'react-icons/fc';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList icon={<RiHtml5Line style={{fontSize:40, color:"orange"}}/>} skill="HTML" />
        <SkillList icon={<RiCss3Line style={{fontSize:40, color:"blue"}}/>} skill="CSS" />
        <SkillList icon={<RiJavascriptLine style={{fontSize:40,color:"yellow"}}/>}  skill="JavaScript" />
        <SkillList icon={<RiReactjsFill style={{fontSize:40,color:"cyan"}}/>}  skill="React" />
        <SkillList icon={<RiAnchorLine style={{fontSize:40,color:"red"}}/>}  skill="Angular" />
        <SkillList icon={<SiTypescript style={{fontSize:40,color:"lightblue"}}/>}  skill="TypeScript" />
        <SkillList icon={<RiTailwindCssLine style={{fontSize:40,color:"blue"}}/>}  skill="Tailwind CSS" />
        <SkillList icon={<RiBootstrapLine style={{fontSize:40,color:"purple"}}/>} skill="Bootstrap" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList icon={<RiJavaLine style={{fontSize:40, color:"lightBlue"}}/>} skill="Java" />
        <SkillList icon={<SiSpring style={{fontSize:40, color:"green"}}/>} skill="Spring" />
        <SkillList icon={<SiExpress style={{fontSize:40, color:"white"}}/>} skill="Express JS" />
        <SkillList icon={<FaNodeJs style={{fontSize:40, color:"green"}}/>} skill="Node Js" />
        <SkillList icon={<FaPython style={{fontSize:40, color:"yellow"}}/>} skill="Python" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList icon={<TbBrandReactNative style={{fontSize:40,color:"cyan"}}/>} skill="React Native" />
        <SkillList icon={<SiFlutter style={{fontSize:40,color:"cyan"}}/>} skill="Flutter" />
        
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList icon={<SiMysql style={{fontSize:40,color:"blue"}}/>} skill="MySQL" />
        <SkillList icon={<BiLogoMongodb style={{fontSize:40,color:"green"}}/>} skill="MongoDB" />
        
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList icon={<FaGitSquare style={{fontSize:40,color:"red"}}/>} skill="Git" />
        <SkillList icon={<FaGithub style={{fontSize:40,color:"gray"}}/>} skill="Git Hub" />
        <SkillList icon={<SiMicrosoftazure style={{fontSize:40,color:"cyan"}}/>} skill="Azure" />
        <SkillList icon={<SiPostman style={{fontSize:40,color:"orange"}}/>} skill="Postman" />
        <SkillList icon={<FaDigitalOcean style={{fontSize:40,color:"blue"}}/>} skill="Digital Ocean" />
        
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList icon={<FaWindows style={{fontSize:40,color:"cyan"}}/>} skill="Windows" />
        <SkillList icon={<FcLinux style={{fontSize:40,color:"cyan"}}/>} skill="Linux" />
       
        
      </div>
    </section>
  );
}

export default Skills;

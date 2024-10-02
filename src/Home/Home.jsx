import styles from './Home.module.css';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import AboutMe from './AboutMe/AboutMe';
import { Element } from 'react-scroll';
import { ScrollTop } from '../components/ScrollTop/ScrollTop';

const Home = () => {
  return (
    <div className={styles.container}>
      <Element name="aboutMe" className={styles.section}>
        <AboutMe />
      </Element>
      <Element name="skills" className={styles.section}>
        <Skills />
      </Element>
      <Element name="projects" className={styles.section}>
        <Projects />
      </Element>
      <ScrollTop />
    </div>
  );
}

export default Home;

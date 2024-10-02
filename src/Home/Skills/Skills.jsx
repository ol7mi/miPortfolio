import React, { useEffect, useState } from 'react';
import styles from './Skills.module.css';
import spring from '../../assets/images/spring.png';
import java from '../../assets/images/java.png';
import oracle from '../../assets/images/oracle.png';
import tomcat from '../../assets/images/tomcat.png';
import mybatis from '../../assets/images/mybatis.png';
import html from '../../assets/images/html.png';
import css from '../../assets/images/css.png';
import js from '../../assets/images/js.png';
import jquery from '../../assets/images/jquery.png';
import react from '../../assets/images/react.png';
import git from '../../assets/images/git.png';
import gitKraken from '../../assets/images/gitKraken.png';
import github from '../../assets/images/github.png';
import notion from '../../assets/images/notion.png';
import jira from '../../assets/images/jira.png';
import eclipse from '../../assets/images/eclipse.png';
import vsCode from '../../assets/images/vsCode.png';
import firebase from '../../assets/images/firebase.png';
import figma from '../../assets/images/figma.png';
import balsamiq from '../../assets/images/balsamiq.png';
import zeplin from '../../assets/images/zeplin.png';
import googleSheets from '../../assets/images/googleSheets.png';
import Illustrator from '../../assets/images/Illustrator.png';
import hwp from '../../assets/images/hwp.png';
import ps from '../../assets/images/ps.png';
import powerPoint from '../../assets/images/powerPoint.png';
import bootstrap from '../../assets/images/bootstrap.png';
import xd from '../../assets/images/xd.png';
import { Modal } from '../../components/Modal/Modal';

const Skills = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [progress, setProgress] = useState(0);

  const skillsData = {
    FrontEnd: [
      { image: html, title: 'HTML5', proficiency: 95 },
      { image: css, title: 'CSS3', proficiency: 95 },
      { image: jquery, title: 'jQuery', proficiency: 90 },
      { image: js, title: 'JavaScript', proficiency: 90 },
      { image: react, title: 'React.js', proficiency: 85 }
    ],
    BackEnd: [
      { image: java, title: 'Java', proficiency: 80 },
      { image: spring, title: 'Spring Boot', proficiency: 79 },
      { image: oracle, title: 'Oracle DB', proficiency: 75 },
      { image: tomcat, title: 'Tomcat', proficiency: 75 },
      { image: mybatis, title: 'MyBatis', proficiency: 90 }
    ],
    Collaboration: [
      { image: git, title: 'Git'},
      { image: github, title: 'GitHub'},
      { image: gitKraken, title: 'GitKraken'},
      { image: jira, title: 'Jira'},
      { image: notion, title: 'Notion'}
    ],
    IDE_Tools: [
      { image: eclipse, title: 'Eclipse'},
      { image: vsCode, title: 'VSCode'},
      { image: firebase, title: 'Firebase'},
    ],
    UIUX_Design: [
      { image: balsamiq, title: 'Balsamiq', proficiency: 100 },
      { image: bootstrap, title: 'bootstrap', proficiency: 90 },
      { image: figma, title: 'Figma', proficiency: 90 },
      { image: zeplin, title: 'Zeplin', proficiency: 70 },
      { image: ps, title: 'Photoshop', proficiency: 75 },
      { image: Illustrator, title: 'Illustrator', proficiency: 75 },
      { image: xd, title: 'Adobe XD', proficiency: 90 }
    ],
    OfficeSkills: [
      { image: googleSheets, title: 'Google Sheets'},
      { image: hwp, title: 'HWP'},
      { image: powerPoint, title: 'PowerPoint'}
    ]
  };

  const openModal = (skill) => {
    setSelectedSkill(skill);
    setIsOpen(true);
    setProgress(0); // 초기화
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedSkill(null);
    setProgress(0); // 초기화
  };

  useEffect(() => {
    if (isOpen && selectedSkill && selectedSkill.proficiency) {
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 2;
        if (currentProgress >= selectedSkill.proficiency) {
          clearInterval(interval);
          setProgress(selectedSkill.proficiency); // 최대 숙련도에 도달하면 설정
        } else {
          setProgress(currentProgress);
        }
      }, 20); // 20ms마다 2씩 증가
    }
  }, [isOpen, selectedSkill]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.skillsSection}>
        {/* 프론트엔드 기술 */}
        <div className={styles.category}>
          <h2>FrontEnd</h2>
          <div className={styles.skills}>
            {skillsData.FrontEnd.map((skill, index) => (
              <img
                key={index}
                src={skill.image}
                alt={skill.title}
                onClick={() => openModal(skill)}
              />
            ))}
          </div>
        </div>

        {/* 백엔드 기술 */}
        <div className={styles.category}>
          <h2>BackEnd</h2>
          <div className={styles.skills}>
            {skillsData.BackEnd.map((skill, index) => (
              <img
                key={index}
                src={skill.image}
                alt={skill.title}
                onClick={() => openModal(skill)}
              />
            ))}
          </div>
        </div>

        {/* 협업 도구 */}
        <div className={styles.category}>
          <h2>Collaboration Tools</h2>
          <div className={styles.skills}>
            {skillsData.Collaboration.map((skill, index) => (
              <img
                key={index}
                src={skill.image}
                alt={skill.title}
                onClick={() => openModal(skill)}
              />
            ))}
          </div>
        </div>

        {/* IDE 및 도구 */}
        <div className={styles.category}>
          <h2>IDE & Tools</h2>
          <div className={styles.skills}>
            {skillsData.IDE_Tools.map((skill, index) => (
              <img
                key={index}
                src={skill.image}
                alt={skill.title}
                onClick={() => openModal(skill)}
              />
            ))}
          </div>
        </div>

        {/* UI/UX 디자인 툴 */}
        <div className={styles.category}>
          <h2>UI/UX Design Tools</h2>
          <div className={styles.skills}>
            {skillsData.UIUX_Design.map((skill, index) => (
              <img
                key={index}
                src={skill.image}
                alt={skill.title}
                onClick={() => openModal(skill)}
              />
            ))}
          </div>
        </div>

        {/* 오피스 스킬 */}
        <div className={styles.category}>
          <h2>Office Skills</h2>
          <div className={styles.skills}>
            {skillsData.OfficeSkills.map((skill, index) => (
              <img
                key={index}
                src={skill.image}
                alt={skill.title}
                onClick={() => openModal(skill)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 모달 창 */}
      <Modal isOpen={isOpen} onClose={closeModal}>
        {selectedSkill && (
          <div style={{ width: '500px', height: '500px', overflow: 'auto' }}>
            <img
              src={selectedSkill.image}
              alt={selectedSkill.title}
              style={{ width: '100%', height: '300px', borderRadius: '8px', padding: '30px', borderRadius: '40px' }}
            />
            <div className={styles.modalBox}>
              <h3>{selectedSkill.title}</h3>

              {/* 숙련도 바 (숙련도가 존재하는 경우에만 표시) */}
              {selectedSkill.proficiency && (
                <div style={{ marginTop: '20px' }}>
                  <p>{progress}%</p>
                  <div style={{ background: '#ddd', borderRadius: '5px', height: '20px', width: '100%' }}>
                    <div
                      style={{
                        marginTop: '8px',
                        background: '#76ABAE',
                        width: `${progress}%`,
                        height: '100%',
                        borderRadius: '5px',
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Skills;

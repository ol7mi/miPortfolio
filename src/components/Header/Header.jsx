import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-scroll';

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const headerHeight = 82; // 헤더의 높이

  // 스크롤 시 헤더 고정 처리
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 페이지 맨 위로 스크롤하는 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 스크롤을 부드럽게
    });
  };

  return (
    <div className="header">
      <div className={styles.headerWrap}>
        <div className={styles.headerCont}>
          <div className={styles.naviMenuList}>
                  {/* 이름 클릭 시 페이지 새로고침 */}
                  <div className={styles.name} onClick={scrollToTop}>
                    eunmi's Portfolio
                  </div>
                  <Link
                    activeClass={styles.active}
                    to="aboutMe"
                    spy={true}
                    smooth={true}
                    offset={-headerHeight}  // 헤더 크기만큼 스크롤 위치 보정
                    duration={500}
                    className={styles.naviMenu}
                  >
                    About Me
                  </Link>
                  <Link
                    activeClass={styles.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-headerHeight}  // 헤더 크기만큼 스크롤 위치 보정
                    duration={500}
                    className={styles.naviMenu}
                  >
                    Skills
                  </Link>
                  <Link
                    activeClass={styles.active}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-headerHeight}  // 헤더 크기만큼 스크롤 위치 보정
                    duration={500}
                    className={styles.naviMenu}
                  >
                    Projects
                  </Link>
          </div>
        </div>
        <div style={{ height: `${headerHeight}px` }} />
      </div>
    </div>
  );
};

export default Header;

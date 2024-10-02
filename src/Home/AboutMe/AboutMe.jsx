import styles from './AboutMe.module.css';
import me from '../../assets/images/eunmi.jpeg';
const AboutMe = () => {
    const keywords = [
      '성실함', 
      '문제 해결 능력', 
      '팀워크', 
      '사용자 경험', 
      '풀스택 개발', 
      'React', 
      'Spring Boot',
      'Java', 
      'Oracle DB', 
      'JavaScript', 
      'UI/UX 디자인', 
      'GitHub', 
      '지속적인 학습',
      '의사소통 능력',
      '책임감', 
      '주도성', 
      '효율성', 
      '데이터베이스 설계',
      '버전 관리',
      '문서화 능력'
    ];
    // 키워드를 랜덤하게 섞기
    const shuffledKeywords = keywords.sort(() => Math.random() - 0.5);
  
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>About Me</h1> 
          <div className={styles.about}>
              <div className={styles.aboutMe}>
                <div className={styles.img}>
                  <div>
                    <img src={me} alt='me'/>
                  </div>
                </div>
                <div>안녕하세요. 풀스택 개발자 전은미입니다. 서비스업에서 고객의 요구를 이해하고, 이를 만족시키는 경험을 통해 문제 해결에 대한 흥미와 능력을 키웠습니다. 이러한 경험은 자연스럽게 IT와 기술을 통해 더 큰 가치를 창출하고 싶다는 열망으로 이어졌습니다. 프론트엔드와 백엔드 모두에서 사용자 중심의 웹 애플리케이션을 개발하는 데에 열정을 가지고 있으며, 특히 React와 Spring Boot를 활용한 풀스택 개발에 집중하고 있습니다. 고객의 입장에서 생각하며 사용자 경험을 최적화하는 것을 목표로, 다양한 프로젝트에서 실력을 쌓아가고 있습니다.</div>
              </div>
              <div className={styles.keywords}>
                {shuffledKeywords.map((keyword, index) => (
                    <button key={index} className={styles.keywordButton}>
                        {keyword}
                    </button>
                ))}
              </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutMe;
  
// store.js
import {create} from 'zustand';
import wolf1 from '../assets/images/wolf.gif';
import wolf2 from '../assets/images/wolf2.gif';
import wolf3 from '../assets/images/wolf3.gif';
import hows1 from '../assets/images/hows.gif';
import hows2 from '../assets/images/hows2.gif';
import hows3 from '../assets/images/hows3.gif';
import nbti from '../assets/images/nbti.gif';
import gentle1 from '../assets/images/gentle.gif';
import gentle2 from '../assets/images/gentle2.gif';
import gentle3 from '../assets/images/gentle3.gif';
import elemental1 from '../assets/images/elemental.gif';
import elemental2 from '../assets/images/elemental2.gif';
import lock from '../assets/images/lock.gif';
import samsung from '../assets/images/samsung.gif';
import cj from '../assets/images/cj.gif';

export const useProjectStore = create((set) => ({
  projects: [
    {
      id: 1,
      title: 'How’s 인테리어 가구 몰 & 커뮤니티 ',
      subtitle: '2024.08.28 ~ 2024.09.26, 6人',
      images: [hows2,hows1,hows3],
      description:
        '보다 넓은 사용자층을 대상으로 이커머스 웹 서비스를 개발하는 것을 목표로 삼았습니다. 주제는 팀 회의를 통해 모든 팀원이 관심을 가졌던 인테리어로 선정되었습니다. 저는 메인페이지와 베스트 상품, 카테고리, 그리고 상품 리뷰 기능을 맡아 개발했습니다. 이를 통해 사용자에게 더 나은 쇼핑 경험을 제공하고, 리뷰 시스템을 통해 사용자 피드백을 쉽게 수집할 수 있는 기능을 구현하였습니다.',
      features: [
        'Backend : Java 17, Spring Boot 3.3.3',
        'Frontend : React, Axios, Zustand, Swiper, Star Ratings',
        'Database : Oracle',
        '호스팅 : Firebase, Google Cloud Storage',
        '협업 툴 : GitHub, GitKraken, Jira',
      ],
    },
    {
      id: 2,
      title: '기업관리 전산 프로젝트',
      subtitle: '2024.07.24 ~ 2024.08.23, 5人',
      images: [nbti],
      description:
        '기업의 관리 및 운영 효율성을 높이기 위해 Java GUI 를 활용하여 다양한 기능을 통합한 기업 관리 전산 시스템을 개발했습니다. 이 시스템은 직원의 일상 업무를 지원하고, 관리자의 업무를 효율적으로 처리할 수 있도록 돕는 것을 목표로 합니다. 저는 예약 및 일정 기능을 포함한 관리자 페이지를 담당했습니다. 이 시스템을 통해 사용자들이 회의실, 비품, 차량 등의 예약을 효율적으로 관리하고, 캘린더를 통해 일정을 확인하고 공유하는 기능을 구현했습니다. 또한, 관리자 페이지에서는 예약 현황을 한눈에 볼 수 있으며, 관리자가 예약을 수정하거나 삭제하는 등의 기능을 제공하여 보다 효율적인 관리가 가능하도록 설계했습니다.',
      features: [
        'Backend : Java (OpenJDK 17)',
        'Frontend : React',
        'Database : Oracle',
        'VCS : Git, GitHub',
        'IDE : Spring Boot, VSCode, SQL Developer',
        'Libraries : Bootstrap5, JDBC, GSON, AXIOS, React-Router-DOM, Zustand',
      ],
    },
    {
      id: 3,
      title: 'Wolf 게임 포털 사이트',
      subtitle: '2024.06.13 ~ 2024.06.28, 5人',
      images: [wolf1,wolf2,wolf3],
      description:
        '이 프로젝트는 사용자가 다양한 미니게임을 플레이하고, 게임 관련 커뮤니티 기능을 제공받을 수 있는 웹 포털 사이트를 구축하는 것이 목표였습니다. 프로젝트 팀원 5명이 각각 개발한 미니게임을 통합하여 하나의 게임 포털 사이트로 구현하였고, 이를 통해 사용자는 손쉽게 다양한 게임을 플레이할 수 있는 환경을 제공받았습니다. 저는 프로젝트에서 메인 페이지 총괄을 맡았으며, 게임과 관련된 여러 페이지(게임 목록, 게임 상세 등)를 담당했습니다. 또한, 차피하기라는 미니게임을 개발하였고, 이를 포털에 통합하여 사용자들이 직접 즐길 수 있게 하였습니다. 차피하기 게임은 제한된 시간 내에 자동차를 피하며 생존하는 것이 목표인 액션 게임으로, 빠른 반응속도가 요구됩니다.',
      features: [
        'Backend : Java, JSP (OpenJDK 11)',
        'Frontend : HTML5, CSS3, JavaScript',
        'Database : Oracle',
        'WAS : Tomcat',
        'VCS : Git, GitHub',
        'IDE : Eclipse, VSCode, SQL Developer',
        'Library : Phaser3, Bootstrap5, JQuery, JSTL, OJDBC, Tinymce, Sweetalert2, Cos, Gson, Chartjs, Jakarta.activation, Jakarta.mail, Jsoup',
      ],
    },
    {
      id: 4,
      title: '엘리멘탈',
      subtitle: '2024.03.21 ~ 2024.03.22, 1人',
      images: [elemental1, elemental2],
      description:
      '이 애니메이션은 제가 개인적으로 좋아하는 주제에서 영감을 받아 제작한 것입니다. 제가 흥미를 느끼는 요소들을 시각적으로 표현하고, 이를 통해 사용자들에게 감정적 경험을 제공하고자 했습니다.',
      features: [
        'HTML',
        'CSS',
      ],
    },
    {
      id: 5,
      title: '젠틀 몬스터',
      subtitle: '2024.04.01 ~ 2024.04.02, 1人',
      images: [gentle1, gentle2, gentle3],
      description:
        ' Gentle Monster의 홈페이지를 반응형으로 구현한 것으로, PC, 태블릿, 모바일 화면 크기에 맞춰 콘텐츠가 조정되는 웹 페이지입니다. 순수 HTML과 CSS만을 사용하여 부트스트랩의 반응형 그리드 시스템을 구현했습니다.',
      features: [
        '순수 HTML과 CSS로만 구현되었기 때문에',
        '자바스크립트와 같은 동적 기능 없이 정적인 페이지로 구성되어 있고,',
        '디자인과 레이아웃에 집중한 프로젝트입니다.',
      ],
    },
    {
      id: 6,
      title: '락앤락(Lock&Lock)',
      subtitle: '1人 PROJECT',
      images: [lock],
      description:
        '이 프로젝트는 락앤락(Lock&Lock) 공식 홈페이지를 클론 코딩한 작업입니다. 클론 코딩을 통해 원본 웹사이트의 레이아웃, 기능, 그리고 사용자 경험을 학습하고 재현하는 것이 목적이었습니다.',
      features: [
        'HTML',
        'CSS',
        'JavaScript',
      ],
    },
    {
      id: 7,
      title: 'CJONE',
      subtitle: '1人 PROJECT',
      images: [cj],
      description:
      '이 프로젝트는 CJONE 공식 홈페이지를 클론 코딩한 작업입니다. 클론 코딩을 통해 원본 웹사이트의 레이아웃, 기능, 그리고 사용자 경험을 학습하고 재현하는 것이 목적이었습니다.',
      features: [
        'HTML',
        'CSS',
        'JavaScript',
      ],
    },
    {
      id: 8,
      title: '삼성전기',
      subtitle: '1人 PROJECT',
      images: [samsung],
      description:
        '이 프로젝트는 삼성전기 공식 홈페이지를 클론 코딩한 작업입니다. 클론 코딩을 통해 원본 웹사이트의 레이아웃, 기능, 그리고 사용자 경험을 학습하고 재현하는 것이 목적이었습니다.',
      features: [
        'HTML',
        'CSS',
      ],
    },
  ],
}));

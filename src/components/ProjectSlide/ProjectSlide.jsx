import styles from './ProjectSlide.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProjectSlide = ({ title, subtitle, images, description, features }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.subTitle}>{subtitle}</h3>
      <div className={styles.projectContent}>
        <div className={styles.leftSide}>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image} alt={`Slide ${index + 1}`} className={styles.slideImage} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.rightSide}>
          {/* <h2>{title}</h2> */}
          <p>{description}</p>
          <p>기술 스택</p>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;

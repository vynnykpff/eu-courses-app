import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CertificatesHeader } from './components';
import { certificatesArray } from './certificatesArray.ts';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './Certificates.module.scss';

export const Certificates = () => {
  return (
    <div className={styles.container}>
      <CertificatesHeader />
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {certificatesArray.map(({ src, alt }) => (
          <SwiperSlide>
            <img className={styles.certificateImage} src={src} alt={alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

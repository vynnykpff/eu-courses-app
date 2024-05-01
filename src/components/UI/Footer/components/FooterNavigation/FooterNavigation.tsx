import { Container } from '@components';
import { useEffect, useRef } from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import styles from './FooterNavigation.module.scss';

export const FooterNavigation = () => {
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    getCurrentYear();
  }, []);

  const getCurrentYear = () => {
    const currentYear = new Date().getFullYear();
    if (spanRef.current) {
      spanRef.current.textContent = currentYear.toString();
    }
  };

  return (
    <Container className={styles.container}>
      <div className={styles.footerBorder}></div>
      <div className={styles.footerContentWrapper}>
        <p className={styles.footerCopyrights}>
          Copyright <span ref={spanRef}></span> | Всі права захищені
        </p>
        <ul className={styles.socialMediasList}>
          <li className={styles.socialMediasListItem}>
            <a href="https://www.facebook.com/euuniversitet">
              <FaFacebook />
            </a>
          </li>
          <li className={styles.socialMediasListItem}>
            <a href="https://instagram.com/euuniversitet?igshid=YmMyMTA2M2Y=%5C">
              <FaInstagram />
            </a>
          </li>
          <li className={styles.socialMediasListItem}>
            <a href="https://www.tiktok.com/@european_university?_t=8hCybcuYZMr&_r=1">
              <FaTiktok />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
};

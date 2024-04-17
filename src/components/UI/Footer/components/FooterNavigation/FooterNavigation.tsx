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
            <FaFacebook />
          </li>
          <li className={styles.socialMediasListItem}>
            <FaInstagram />
          </li>
          <li className={styles.socialMediasListItem}>
            <FaTiktok />
          </li>
        </ul>
      </div>
    </Container>
  );
};

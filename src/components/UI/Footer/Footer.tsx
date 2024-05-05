import { FooterNavigation } from './components';
import { Container } from '@components';
import footerLogo from '#/images/footer-logo.svg';
import { FiPhone } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import { IoMailOutline } from 'react-icons/io5';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer id="contacts" className={styles.footerWrapper}>
      <Container className={styles.container}>
        <div className={styles.footerLogoWrapper}>
          <img className={styles.footerLogo} src={footerLogo} alt="логотип підвалу" />
          <p className={styles.footerText}>Ліцензія серія ВО No00228-022801 від 15.05.2017</p>
        </div>
        <div className={styles.contentContainer}>
          <p className={styles.title}>Посилання</p>
          <ul className={styles.contactsList}>
            <li className={styles.contactsListItem}>
              <a href="#about">Про Нас</a>
            </li>
            <li className={styles.contactsListItem}>
              <a href="#courses">Курси</a>
            </li>
            <li className={styles.contactsListItem}>
              <a href="#home">Головна</a>
            </li>
          </ul>
        </div>
        <div className={styles.contentContainer}>
          <p className={styles.title}>Контакти</p>
          <ul className={styles.contactsList}>
            <li className={styles.contactsListItem}>
              <FiPhone className={styles.footerIcon} />
              <a href="tel:0443345304">(044) 334-53-04</a>
              <a href="tel:0503560245">(050) 356-02-45</a>
            </li>
            <li className={styles.contactsListItem}>
              <IoMailOutline className={styles.footerIcon} />
              <a href="mailto:vstup@e-u.edu.ua">vstup@e-u.edu.ua</a>
            </li>
            <li className={styles.contactsListItem}>
              <GrLocation className={styles.footerIcon} />
              <a target="_blank" href="https://maps.app.goo.gl/bBgvFZrpUtAjV37s5">
                м. Київ,бульвар академіка Вернадського, 16 В(головний корпус)
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <FooterNavigation />
    </footer>
  );
};

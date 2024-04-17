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
        <div>
          <img className={styles.footerLogo} src={footerLogo} alt="" />
          <p className={styles.footerText}>
            Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div>
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
        <div>
          <p className={styles.title}>Контакти</p>
          <ul className={styles.contactsList}>
            <li className={styles.contactsListItem}>
              <FiPhone className={styles.footerIcon} />
              <a href="tel:2095550104">(209) 555-0104</a>
            </li>
            <li className={styles.contactsListItem}>
              <IoMailOutline className={styles.footerIcon} />
              <a href="mailto:michelle.rivera@example.com">michelle.rivera@example.com</a>
            </li>
            <li className={styles.contactsListItem}>
              <GrLocation className={styles.footerIcon} />
              <a href="">2715 Ash Dr. San Jose, South Dakota 83475</a>
            </li>
          </ul>
        </div>
      </Container>
      <FooterNavigation />
    </footer>
  );
};

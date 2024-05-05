import { useMatchMedia } from '@hooks';
import { NavbarMenuItem } from '@types';
import { NavLink } from 'react-router-dom';
import { NavbarDesktop, NavbarMobile } from './components';
import { Routes } from '@constants';
import logoImage from '#/images/logo.svg';
import styles from './Navbar.module.scss';

const { HOME } = Routes;

const navbarMenu: NavbarMenuItem[] = [
  { title: 'Головна', targetId: '' },
  { title: 'Курси', targetId: 'courses' },
  { title: 'Про Нас', targetId: 'about' },
  { title: 'Контакти', targetId: 'contacts' },
];

export const Navbar = () => {
  const isMobile = useMatchMedia('(max-width: 768px)');

  const handleClick = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav id="home" className={styles.container}>
      <ul className={styles.navbarList}>
        <NavLink to={HOME}>
          <li className={styles.navbarListItem}>
            <img className={styles.logoImage} src={logoImage} alt="header logo" />
          </li>
        </NavLink>
      </ul>
      {isMobile ? (
        <NavbarMobile navbarMenu={navbarMenu} handleClick={handleClick} />
      ) : (
        <NavbarDesktop navbarMenu={navbarMenu} handleClick={handleClick} />
      )}
    </nav>
  );
};

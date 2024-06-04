import { Routes } from '@constants';
import { NavbarMenuItem } from '@types';
import { NavLink } from 'react-router-dom';
import styles from './NavbarDesktop.module.scss';

type Props = {
  handleClick: (targetId: string) => void;
  navbarMenu: NavbarMenuItem[];
};

const { HOME } = Routes;

export const NavbarDesktop = ({ navbarMenu, handleClick }: Props) => {
  return (
    <ul className={styles.navbarList}>
      {navbarMenu.map(({ title, targetId }) => (
        <li className={styles.navbarListItem} key={targetId}>
          <NavLink to={HOME} onClick={() => handleClick(targetId)}>
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

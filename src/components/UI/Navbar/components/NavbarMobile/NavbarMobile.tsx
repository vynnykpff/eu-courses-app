import { BurgerMenuButton } from '@components';
import { Routes } from '@constants';
import { NavbarMenuItem } from '@types';
import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavbarMobile.module.scss';

type Props = {
  handleClick: (targetId: string) => void;
  navbarMenu: NavbarMenuItem[];
};

const { HOME } = Routes;

export const enum AnimationDefaultDuration {
  DEFAULT = 0.2,
  PRIMARY = 0.3,
  SECONDARY = 0.4,
}

export const animationBurgerMenu = {
  initial: { x: '100%' },
  animate: { x: 0 },
  exit: { x: '100%' },
  transition: { type: 'tween', duration: AnimationDefaultDuration.DEFAULT },
};

export const NavbarMobile = ({ navbarMenu, handleClick }: Props) => {
  const [isOpenBurger, setIsOpenBurger] = useState(false);

  const handleCloseBurgerMenu = () => {
    setIsOpenBurger(prev => !prev);
  };

  const handleClickNavbarMenu = (targetId: string) => {
    handleClick(targetId);
    handleCloseBurgerMenu();
  };

  useEffect(() => {
    const body = document.body;
    if (isOpenBurger) {
      body.setAttribute('data-burger-open', 'true');
    } else {
      body.removeAttribute('data-burger-open');
    }
  }, [isOpenBurger]);

  return (
    <>
      <BurgerMenuButton
        isOpen={isOpenBurger}
        strokeWidth={2.5}
        color="#000"
        transition={{ ease: 'easeOut', duration: 0.2 }}
        width={22}
        height={14}
        onClick={handleCloseBurgerMenu}
        className={styles.test}
      />
      <AnimatePresence>
        {isOpenBurger && (
          <div
            onClick={handleCloseBurgerMenu}
            className={cn(styles.navbarMobileContainer, isOpenBurger && styles.navbarMobileContainerActive)}
          >
            <motion.div {...animationBurgerMenu} onClick={e => e.stopPropagation()} className={styles.navbarMobileContent}>
              <ul className={styles.navbarList}>
                {navbarMenu.map(({ title, targetId }) => (
                  <li className={styles.navbarListItem} key={targetId}>
                    <NavLink to={HOME} onClick={() => handleClickNavbarMenu(targetId)}>
                      {title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

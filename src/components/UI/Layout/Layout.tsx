import { Footer, Header } from '@components';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styles from './Layout.module.scss';

export const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.layoutContainer}>
      <Header />
      <main className={styles.mainContainer}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

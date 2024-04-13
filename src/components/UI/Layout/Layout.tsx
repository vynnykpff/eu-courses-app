import { Footer, Header } from '@components';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

export const Layout = () => {
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

import { Navbar } from '@/components/UI/Navbar';
import { Container } from '@components';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header>
      <Container className={styles.container}>
        <Navbar />
      </Container>
    </header>
  );
};

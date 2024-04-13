import { Navbar } from '@/components/UI/Navbar';
import { Container } from '@components';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <Container className={styles.container}>
      <Navbar />
    </Container>
  );
};

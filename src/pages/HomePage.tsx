import { Container, PreviewsCourses } from '@components';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      <Container className={styles.container}>
        <PreviewsCourses />
      </Container>
      {/*<div id="home" className={styles.section}>*/}
      {/*  <Container className={styles.container}>Home section</Container>*/}
      {/*</div>*/}
      {/*<div id="courses" className={styles.section}>*/}
      {/*  <Container className={styles.container}>Courses section</Container>*/}
      {/*</div>*/}
      {/*<div id="about" className={styles.section}>*/}
      {/*  <Container className={styles.container}>About section</Container>*/}
      {/*</div>*/}
      {/*<div id="contacts" className={styles.section}>*/}
      {/*  <Container className={styles.container}>Contacts section</Container>*/}
      {/*</div>*/}
    </div>
  );
};

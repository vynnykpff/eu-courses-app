import { Courses } from '@/components/Courses';
import { About, Container, PreviewsCourses, Reviews } from '@components';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={styles.homePageWrapper}>
      <div className={styles.homePageContainer}>
        <Container className={styles.container}>
          <PreviewsCourses />
        </Container>
        {/*<div id="contacts" className={styles.section}>*/}
        {/*  <Container className={styles.container}>Contacts section</Container>*/}
        {/*</div>*/}
      </div>
      <div id="courses">
        <Container className={styles.coursesContainer}>
          <Courses />
        </Container>
      </div>
      <div id="about" className={styles.homePageContainer}>
        <Container className={styles.coursesContainer}>
          <About />
        </Container>
      </div>
      <Container className={styles.coursesContainer}>
        <Reviews />
      </Container>
    </div>
  );
};

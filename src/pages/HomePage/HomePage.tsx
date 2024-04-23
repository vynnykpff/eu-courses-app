import { Courses } from '@/components/Courses';
import { About, Container, Partners, PreviewsCourses, Reviews } from '@components';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <div className={styles.homePageWrapper}>
      <div className={styles.homePageContainer}>
        <Container className={styles.container}>
          <PreviewsCourses />
        </Container>
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
      <Container className={styles.coursesContainer}>
        <Partners />
      </Container>
    </div>
  );
};

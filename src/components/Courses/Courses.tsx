import { Container } from '@components';
import { CoursesHeader, CoursesList } from './components';
import styles from './Courses.module.scss';

export const Courses = () => {
  return (
    <Container className={styles.container}>
      <CoursesHeader />
      <CoursesList />
    </Container>
  );
};

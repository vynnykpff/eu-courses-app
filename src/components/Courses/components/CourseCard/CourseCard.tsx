import { Container } from '@components';
import { CourseFields } from '@types';
import { BiCartAlt } from 'react-icons/bi';
import styles from './CourseCard.module.scss';

export const CourseCard = (props: CourseFields) => {
  const { title, price, previewImage, courseDuration, students } = props;

  return (
    <Container className={styles.container}>
      <div className={styles.courseImageContainer}>
        <img className={styles.courseImage} src={previewImage} alt={title} />
      </div>
      <Container className={styles.contentContainer}>
        <Container className={styles.courseInfoContainer}>
          <p className={styles.courseInfo}>{students} Студентів</p>
          <p className={styles.courseInfo}>{courseDuration}</p>
        </Container>
        <p className={styles.title}>{title}</p>
        <Container className={styles.courseNavigationContainer}>
          <p className={styles.coursePrice}>{price}</p>
          <BiCartAlt className={styles.courseCart} />
        </Container>
      </Container>
    </Container>
  );
};

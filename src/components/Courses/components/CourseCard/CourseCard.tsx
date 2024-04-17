import { Container } from '@components';
import { CourseItem } from '@types';
import { BiCartAlt } from 'react-icons/bi';
import styles from './CourseCard.module.scss';

export const CourseCard = (props: CourseItem) => {
  const { title, price, duration, students, image } = props;

  return (
    <Container className={styles.container}>
      <div className={styles.courseImageContainer}>
        <img className={styles.courseImage} src={image} alt="" />
      </div>
      <Container className={styles.contentContainer}>
        <Container className={styles.courseInfoContainer}>
          <p className={styles.courseInfo}>{students} Студентів</p>
          <p className={styles.courseInfo}>{duration}</p>
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

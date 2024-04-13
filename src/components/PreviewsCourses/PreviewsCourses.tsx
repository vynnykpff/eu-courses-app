import { Button } from '@/components';
import personImage from '#/images/person.png';
import decorIcon from '#/images/01.png';
import styles from './PreviewsCourses.module.scss';

export const PreviewsCourses = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <h3 className={styles.subtitle}>
          Successful coaches are <br /> visionaries
        </h3>
        <h1 className={styles.title}>
          Good <span className={styles.accentItem}>coaching</span>
          <br /> is good teaching &<br /> nothing else.
        </h1>
        <Button className={styles.button}>Переглянути курси</Button>
      </div>
      <img className={styles.image} src={personImage} alt="person image" />
      <img className={styles.icon} src={decorIcon} alt="decor icon" />
    </div>
  );
};

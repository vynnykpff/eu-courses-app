import { aboutArray } from './aboutArray.ts';
import { AboutCard } from './components';
import styles from './About.module.scss';

export const About = () => {
  return (
    <div className={styles.container}>
      <h5 className={styles.title}>Про нас</h5>
      <div className={styles.aboutCardsWrapper}>
        {aboutArray.map((item, index) => (
          <AboutCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

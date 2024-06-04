import { AboutItem } from '@types';
import styles from './AboutCard.module.scss';

export const AboutCard = ({ img, content }: AboutItem) => {
  return (
    <div className={styles.container}>
      <img className={styles.aboutImage} src={img} alt="" />
      <p className={styles.aboutContent}>{content}</p>
    </div>
  );
};

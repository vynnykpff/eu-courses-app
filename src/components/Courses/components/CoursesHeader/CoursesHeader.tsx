import circleIcon from '#/images/02.svg';
import styles from './CoursesHeader.module.scss';

export const CoursesHeader = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>
        Наші <span className="accentItem">Курси</span>
      </h4>
      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporidunt ut labore veniam...
      </p>
      <img className={styles.image} src={circleIcon} alt="circle icon" />
    </div>
  );
};

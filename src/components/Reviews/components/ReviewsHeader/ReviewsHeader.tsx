import styles from './ReviewsHeader.module.scss';

export const ReviewsHeader = () => {
  return (
    <div className={styles.container}>
      <h5 className={styles.title}>
        <span className="accentItem">Відгуки</span>
      </h5>
      <p className={styles.subtitle}>Що кажуть наші студенти про нас</p>
    </div>
  );
};

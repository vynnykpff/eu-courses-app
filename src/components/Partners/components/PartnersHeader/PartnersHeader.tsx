import styles from './PartnersHeader.module.scss';

export const PartnersHeader = () => {
  return (
    <div className={styles.container}>
      <h5 className={styles.title}>
        <span className="accentItem">3 000+</span> випускників
      </h5>
      <p className={styles.subtitle}>Вже працюють у провідних IT-компаніях в 15+ країнах світу</p>
    </div>
  );
};

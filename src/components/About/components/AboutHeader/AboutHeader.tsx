import styles from './AboutHeader.module.scss';

export const AboutHeader = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>
        Чому варто <span className="accentItem">вчитися</span> на наших курсах?
      </h4>
      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporidunt ut labore veniam...
      </p>
    </div>
  );
};

import styles from './BenefitsHeader.module.scss';

export const BenefitsHeader = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Чому варто вчитися на курсах Європейського університету?</h4>
      <p className={styles.subtitle}>
        Обираючи наші курси, ви отримуєте не просто освіту, а інструмент для особистісного зростання та професійного успіху. Запишіться на
        курси вже сьогодні та відкрийте нові можливості для себе!
      </p>
    </div>
  );
};

import circleIcon from '#/images/02.svg';
import styles from './CoursesHeader.module.scss';

export const CoursesHeader = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>
        Наші <span className="accentItem">Курси</span>
      </h4>
      <p className={styles.subtitle}>
        Запрошуємо Вас на сертифіковані курси, розроблені фахівцями Європейського університету. Курси спрямовані на формування навичок, які
        допоможуть Вам бути успішними в різних галузях економіки, освіти, культури та особистому житті. Курси побудовані за принципом
        поєднання теорії й практики. Приєднуйтеся до нас, перетворюйте нові знання на джерело вашого успіху, кар’єри і заробітку.
      </p>
      <p className={styles.subtitle}>По завершенню курсів слухачам надається Сертифікат встановленого (державного) зразка.</p>
      <img className={styles.image} src={circleIcon} alt="circle icon" />
    </div>
  );
};

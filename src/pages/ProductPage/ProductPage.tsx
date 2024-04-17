import { Button, Container } from '@components';
import styles from './ProductPage.module.scss';

export const ProductPage = () => {
  return (
    <Container className={styles.container}>
      <div className={styles.productImageWrapper}>
        <img
          className={styles.productImage}
          src="https://lh4.googleusercontent.com/Xv9ESUayWBfoa_Wn_41oZdFJ1OR8Gbodq12yDiLuDAImJOuRULnX2MRrnmlcNX7VcFWvzqNhE61DG093xrY98gzjAKBNQyl-F3ZOakeeq_RtaHUndDG1rhXKfAOW9Ogj7A=w1000"
          alt=""
        />
      </div>

      <h5 className={styles.title}>Криптобізнес: від ідеї до реалізації</h5>
      <p className={styles.description}>
        Приватний вищий навчальний заклад "Європейський університет" запрошує пройти сучасний тренінг
        <strong>"Криптобізнес: від ідеї до реалізації"</strong>. Основна увага під час навчання приділяється формуванню
        <strong>практичних навичок</strong> по роботі з криптоінструментами - біржами та гаманцями. Старт в <strong>криптосвіті</strong> -
        це старт вашої свободи у вільному світі, стабільного заробітку і розуміння тенденцій цифрової економіки.
      </p>

      <div className={styles.topicCourseWrapper}>
        <h6 className={styles.topicCourseTitle}>Тематика курсу:</h6>
        <ol className={styles.topicCourseList}>
          <li className={styles.topicCourseListItem}>
            <strong>Криптовалюти: ринок та технологія</strong>
            <br />
            Проміжне тестування
          </li>
          <li className={styles.topicCourseListItem}>
            <strong>Безпека криптогаманців: Захист своїх віртуальних активів</strong>
            <br />
            Проміжне тестування
          </li>
          <li className={styles.topicCourseListItem}>
            <strong>Використання криптовалют: Як купувати, продавати і обмінювати?</strong>
            <br />
            Проміжне тестування
          </li>
          <li className={styles.topicCourseListItem}>
            <strong>Майнінг криптовалют: Як заробляти гроші на вирішенні математичних задач?</strong>
            <br />
            Проміжне тестування
          </li>
          <li className={styles.topicCourseListItem}>
            <strong>Криптовалюти та податки: Розуміння законодавства та податкових правил</strong>
            <br />
            Проміжне тестування
            <br />
            Фінальне тестування
          </li>
        </ol>
      </div>
      <p className={styles.description}>
        <strong>Курс розрахований на 90 годин</strong> (3 кредити ЄКТС) та передбачає <strong>самостійне</strong> опанування слухачами
        навчального матеріалу, виконання контрольних занять, а також підсумкове тестування. Кожен навчальний блок містить відео-інструкцію,
        опис практичного завдання, проміжний контроль.
      </p>

      <p className={styles.description}>
        <strong>Вартість навчання (включно з електронним сертифікатом): 700 грн.</strong>
      </p>

      <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdvTh03tOQJMC5Sim3k7fSTgY_bsZ5x7wiTF-hs9-VI9SeuXg/viewform">
        <Button className={styles.button}>Детальніше</Button>
      </a>
    </Container>
  );
};

import { Container } from '@components';
import styles from './AboutBenefits.module.scss';
import learnIcon from '#/icons/01.svg';
import graduateIcon from '#/icons/02.svg';
import workIcon from '#/icons/03.svg';

// TODO: refactoring this component
export const AboutBenefits = () => {
  return (
    <Container className={styles.container}>
      <div className={styles.benefitContainer}>
        <div className={styles.contentWrapper}>
          <img className={styles.benefitIcon} src={learnIcon} alt="" />
          <h6 className={styles.benefitTitle}>01. Гнучкість та зручність</h6>
        </div>
        <p className={styles.benefitSubtitle}>Навчання онлайн дозволяє вам вчитися у зручний для вас час та темп, не виходячи з дому.</p>
      </div>
      <div className={styles.benefitContainer}>
        <div className={styles.contentWrapper}>
          <img className={styles.benefitIcon} src={graduateIcon} alt="" />
          <h6 className={styles.benefitTitle}>02. Сертифікація</h6>
        </div>
        <p className={styles.benefitSubtitle}>
          Після успішного завершення курсів ви отримаєте сертифікат, який підтверджує ваші знання та навички.
        </p>
      </div>
      <div className={styles.benefitContainer}>
        <div className={styles.contentWrapper}>
          <img className={styles.benefitIcon} src={workIcon} alt="" />
          <h6 className={styles.benefitTitle}>03. Практичний досвід</h6>
        </div>
        <p className={styles.benefitSubtitle}>
          Курси включають відео-лекції, практичні завдання та контрольні запитання, що забезпечують не тільки теоретичні знання, а й
          практичні навички.
        </p>
      </div>
    </Container>
  );
};

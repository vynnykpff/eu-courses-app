import { Container } from '@components';
import styles from './AboutBenefits.module.scss';
import learnIcon from '#/icons/01.svg';
import graduateIcon from '#/icons/02.svg';
import workIcon from '#/icons/03.svg';

export const AboutBenefits = () => {
  return (
    <Container className={styles.container}>
      <div className={styles.benefitContainer}>
        <img className={styles.benefitIcon} src={learnIcon} alt="" />
        <h6 className={styles.benefitTitle}>01. Learn</h6>
        <p className={styles.benefitSubtitle}>Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua</p>
      </div>
      <div className={styles.benefitContainer}>
        <img className={styles.benefitIcon} src={graduateIcon} alt="" />
        <h6 className={styles.benefitTitle}>02. Graduate</h6>
        <p className={styles.benefitSubtitle}>Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua</p>
      </div>
      <div className={styles.benefitContainer}>
        <img className={styles.benefitIcon} src={workIcon} alt="" />
        <h6 className={styles.benefitTitle}>03. Work</h6>
        <p className={styles.benefitSubtitle}>Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua</p>
      </div>
    </Container>
  );
};

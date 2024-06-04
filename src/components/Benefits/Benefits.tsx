import { AboutBenefits, BenefitsHeader } from './components';
import styles from './Benefits.module.scss';

export const Benefits = () => {
  return (
    <div className={styles.container}>
      <BenefitsHeader />
      <AboutBenefits />
    </div>
  );
};

import { AboutBenefits, AboutHeader } from './components';
import styles from './About.module.scss';

export const About = () => {
  return (
    <div className={styles.container}>
      <AboutHeader />
      <AboutBenefits />
    </div>
  );
};

import { CompaniesList } from '@/components';
import { PartnersHeader } from './components';
import styles from './Partners.module.scss';

export const Partners = () => {
  return (
    <div className={styles.container}>
      <PartnersHeader />
      <CompaniesList />
    </div>
  );
};

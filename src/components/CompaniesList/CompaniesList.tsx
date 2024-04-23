import { companiesArray } from './companiesArray.ts';
import styles from './CompaniesList.module.scss';

export const CompaniesList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {companiesArray.map(({ src, alt }, index) => (
          <img className={styles.companyImage} key={index} src={src} alt={alt} />
        ))}
      </div>
    </div>
  );
};

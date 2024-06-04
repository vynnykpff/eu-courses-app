import Marquee from 'react-fast-marquee';
import { companiesArray } from './companiesArray.ts';
import styles from './CompaniesList.module.scss';

export const CompaniesList = () => {
  return (
    <div className={styles.container}>
      <Marquee pauseOnHover className={styles.listWrapper}>
        {companiesArray.map(({ src, alt }, index) => (
          <img className={styles.companyImage} key={index} src={src} alt={alt} />
        ))}
      </Marquee>
    </div>
  );
};

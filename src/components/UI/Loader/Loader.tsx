import { TailSpin } from 'react-loader-spinner';
import styles from './Loader.module.scss';

export const Loader = () => {
  return (
    <TailSpin
      visible={true}
      height="80"
      width="80"
      color="#3e4bb7"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass={styles.loaderWrapper}
    />
  );
};

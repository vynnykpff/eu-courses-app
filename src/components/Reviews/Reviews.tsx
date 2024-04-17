import { Review, ReviewsHeader } from './components';
import styles from './Reviews.module.scss';

export const Reviews = () => {
  return (
    <div className={styles.container}>
      <ReviewsHeader />
      <div className={styles.reviewsContainer}>
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
};

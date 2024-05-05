import { reviewsArray } from './reviewsArray.ts';
import { Review, ReviewsHeader } from './components';
import styles from './Reviews.module.scss';

export const Reviews = () => {
  return (
    <div className={styles.container}>
      <ReviewsHeader />
      <div className={styles.reviewsContainer}>
        {reviewsArray.map((review, index) => (
          <Review key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

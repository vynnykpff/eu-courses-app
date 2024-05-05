import userReviewStars from '#/icons/05.svg';
import { ReviewItem } from '@types';
import styles from './Review.module.scss';

export const Review = ({ review, name, img }: ReviewItem) => {
  return (
    <div className={styles.container}>
      <div className={styles.userCredentialsContainer}>
        <img className={styles.userImage} src={img} alt={name} />
        <p className={styles.username}>{name}</p>
      </div>
      <p className={styles.userReview}>{review}</p>
      <img className={styles.amountStars} src={userReviewStars} alt="" />
    </div>
  );
};

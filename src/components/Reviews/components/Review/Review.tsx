import userImage from '#/images/04.png';
import userReviewStars from '#/icons/05.svg';
import styles from './Review.module.scss';

export const Review = () => {
  return (
    <div className={styles.container}>
      <div className={styles.userCredentialsContainer}>
        <img className={styles.userImage} src={userImage} alt="" />
        <p className={styles.username}>Ronald Richards</p>
      </div>
      <p className={styles.userReview}>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <img className={styles.amountStars} src={userReviewStars} alt="" />
    </div>
  );
};

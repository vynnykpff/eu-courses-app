import { useActions, useAppSelector } from '@/store';
import { Button, Container, LoaderWrapper } from '@components';
import { getContentTemplate } from '@utils';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductPage.module.scss';

export const ProductPage = () => {
  const { setSingleCourse } = useActions();
  const { id } = useParams();

  const { singleCourse, courses, isPending } = useAppSelector(state => state.courses);

  useEffect(() => {
    setSingleCourse(id ?? '');
  }, [courses]);

  const { title, courseImage, button, content } = singleCourse;

  const renderContent = () => {
    return getContentTemplate(content).map((Template, index) => {
      const pageContent = content[index];

      return <Template key={index} content={pageContent.content} items={pageContent.items} title={pageContent.title} />;
    });
  };

  return (
    <Container className={styles.container}>
      <LoaderWrapper isPending={isPending}>
        <div className={styles.productImageWrapper}>
          <img className={styles.productImage} src={courseImage} alt={title} />
        </div>
        <div className={styles.contentContainer}>
          <h5 className={styles.title}>{title}</h5>
          {renderContent()}
          <a className={styles.buttonWrapper} target="_blank" href={button}>
            <Button className={styles.button} onClick={() => fbq('track', 'Lead')}>
              Зареєструватись
            </Button>
          </a>
        </div>
      </LoaderWrapper>
    </Container>
  );
};

import { useActions, useAppSelector } from '@/store';
import { LoaderWrapper } from '@components';
import { getSlugifyLink } from '@utils';
import { Link } from 'react-router-dom';
import { CourseCard } from '../CourseCard';
import styles from './CoursesList.module.scss';

export const CoursesList = () => {
  const { courses, isPending } = useAppSelector(state => state.courses);
  const { setSingleCourse } = useActions();

  const handleClick = (title: string) => {
    return setSingleCourse(title);
  };

  return (
    <div className={styles.container}>
      <div className={styles.coursesWrapper}>
        <LoaderWrapper isPending={isPending}>
          {courses.map((course, index) => (
            <Link to={`/courses/${getSlugifyLink(course.title)}`} onClick={() => handleClick(course.title)} key={index}>
              <CourseCard {...course} />
            </Link>
          ))}
        </LoaderWrapper>
      </div>
    </div>
  );
};

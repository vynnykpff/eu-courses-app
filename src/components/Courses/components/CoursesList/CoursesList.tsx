import { CourseItem } from '@types';
import { Link } from 'react-router-dom';
import { CourseCard } from '../CourseCard';
import styles from './CoursesList.module.scss';

const courses: CourseItem[] = [
  {
    id: '1234343243433',
    price: '700 грн',
    students: 5.957,
    title: 'Криптобізнес: від ідеї до реалізації',
    duration: '90 годин',
    image: 'https://processer.media/wp-content/uploads/2021/06/maxresdefault-1.jpg',
  },
  {
    id: '4535664y456456',
    price: '35.99',
    students: 5.957,
    title: 'The Complete Financial Analyst',
    duration: '01h 49m',
    image:
      'https://cdn.discordapp.com/attachments/1113611763200561215/1229451561298694164/03.png?ex=662fbafe&is=661d45fe&hm=bd9fa6731975221ef9a30cc43895b328c177c48d43d5a1fa61289311cacd3d5d&',
  },
  {
    id: '453566e334y456456',
    price: '35.99',
    students: 5.957,
    title: 'The Complete Financial Analyst',
    duration: '01h 49m',
    image:
      'https://cdn.discordapp.com/attachments/1113611763200561215/1229451561298694164/03.png?ex=662fbafe&is=661d45fe&hm=bd9fa6731975221ef9a30cc43895b328c177c48d43d5a1fa61289311cacd3d5d&',
  },
  {
    id: '4535266e334y456456',
    price: '35.99',
    students: 5.957,
    title: 'The Complete Financial Analyst',
    duration: '01h 49m',
    image:
      'https://cdn.discordapp.com/attachments/1113611763200561215/1229451561298694164/03.png?ex=662fbafe&is=661d45fe&hm=bd9fa6731975221ef9a30cc43895b328c177c48d43d5a1fa61289311cacd3d5d&',
  },
];

export const CoursesList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.coursesWrapper}>
        {courses.map(course => (
          <Link to={`/courses/${course.id}`}>
            <CourseCard key={course.id} {...course} />
          </Link>
        ))}
      </div>
    </div>
  );
};

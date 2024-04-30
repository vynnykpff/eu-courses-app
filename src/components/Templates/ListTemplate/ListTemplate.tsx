import { CoursesPayloadContent } from '@types';
import ReactMarkdown from 'react-markdown';
import styles from './ListTemplate.module.scss';

export const ListTemplate = ({ items, title }: CoursesPayloadContent) => {
  return (
    <div className={styles.listTemplateContainer}>
      <h6 className={styles.topicCourseTitle}>{title}</h6>
      <ol className={styles.list}>
        {items?.map(item => (
          <li>
            <ReactMarkdown>{item.content.split('\\n').join('\\\n')}</ReactMarkdown>
          </li>
        ))}
      </ol>
    </div>
  );
};

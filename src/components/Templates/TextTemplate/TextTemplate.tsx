import ReactMarkdown from 'react-markdown';
import styles from './TextTemplate.module.scss';

export const TextTemplate = ({ content = '' }) => {
  return <ReactMarkdown className={styles.textContainer}>{content.split('\\n').join('\n')}</ReactMarkdown>;
};

import cn from 'classnames';
import { ReactNode } from 'react';
import styles from './Container.module.scss';

type Props = {
  className?: string;
  children: ReactNode;
};

export const Container = ({ className, children }: Props) => {
  return <div className={cn(styles.container, className)}>{children}</div>;
};

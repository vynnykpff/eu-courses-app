import { useActions } from '@/store';
import { Routing } from '@components';
import { useEffect } from 'react';

export const App = () => {
  const { getCourses } = useActions();

  useEffect(() => {
    getCourses();
  }, []);

  return <Routing />;
};

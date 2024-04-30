import { coursesActions, getCourses } from '@/store';

export * from './coursesSlice';

export const ActionCreators = {
  getCourses: getCourses.asyncThunk,
  ...coursesActions,
};

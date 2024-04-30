import { BaseState, CoursesPayloadContent } from '@/shared/types';

export type CourseItem = {
  id: string;
  title: string;
  price: string;
  duration: string;
  students: number;
  image: string;
};

export type CourseFields = {
  title: string;
  price: string;
  previewImage: string;
  courseImage: string;
  courseDuration: string;
  button: string;
  students: string;
  content: CoursesPayloadContent[];
};

export type CoursesState = {
  courses: CourseFields[];
  singleCourse: CourseFields;
} & BaseState;

export type SingleCoursePayload = string;

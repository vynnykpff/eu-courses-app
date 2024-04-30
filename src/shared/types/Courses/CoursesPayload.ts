import { Item, StrapiImage } from '@types';

export type CoursesPayloadContent = {
  component?: string;
  id?: number;
  content?: string;
  title?: string;
  items?: Item[];
};

type CoursesPayloadFields = {
  title: string;
  price: string;
  courseDuration: string;
  button: string;
  students: string;
  previewImage: StrapiImage;
  courseImage: StrapiImage;
  content: CoursesPayloadContent;
};

export type CoursesPayload = {
  data: {
    attributes: CoursesPayloadFields;
  };
};

import { API_URL } from '@/http';
import { CourseFields, CoursesPayload, CoursesPayloadContent, Item } from '@types';

export const setNormalizeCourses = (payload: CoursesPayload): CourseFields[] => {
  const { data } = payload;

  if (!Array.isArray(data)) {
    return [];
  }

  return data.map(item => {
    const { attributes } = item;

    const { title, price, courseDuration, button, previewImage, courseImage, content, students } = attributes;

    const previewImageUrl = `${API_URL}${previewImage?.data?.attributes?.url}` || '';
    const courseImageUrl = `${API_URL}${courseImage?.data?.attributes?.url}` || '';

    const normalizedContent: CoursesPayloadContent[] = content.map((contentItem: any) => {
      if (contentItem.__component === 'components.list') {
        return {
          component: contentItem.__component.split('.')[1],
          title: contentItem.title,
          items: contentItem.items!.map((listItem: Item) => ({
            id: listItem.id,
            content: listItem.content,
          })),
        };
      }

      return {
        id: contentItem.id,
        component: contentItem.__component!.split('.')[1],
        content: contentItem.content,
      };
    });

    return {
      title,
      price,
      previewImage: previewImageUrl,
      courseImage: courseImageUrl,
      courseDuration,
      button,
      students,
      content: normalizedContent,
    };
  });
};

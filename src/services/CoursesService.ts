import { CoursesPayload } from '@types';
import qs from 'qs';
import { $api } from '@/http';

export class CoursesService {
  static async getCourses() {
    const query = qs.stringify(
      {
        populate: {
          previewImage: {
            populate: '*',
          },
          courseImage: {
            populate: '*',
          },
          content: {
            populate: '*',
          },
        },
      },
      {
        encodeValuesOnly: true,
      },
    );

    const response = await $api.get<CoursesPayload>(`/courses?${query}`);
    return response.data;
  }
}

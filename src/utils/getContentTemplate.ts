import { ListTemplate, TextTemplate } from '@components';
import { CoursesPayloadContent } from '@types';
import { FC } from 'react';

type TemplateProps = Omit<CoursesPayloadContent, 'component'>;

export const getContentTemplate = (pageContent: CoursesPayloadContent[] = []) => {
  const componentTemplateMap: Record<string, FC<TemplateProps>> = {
    text: TextTemplate,
    list: ListTemplate,
  };

  return pageContent.map(item => componentTemplateMap[item.component!]).filter(Boolean);
};

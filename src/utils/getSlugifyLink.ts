import slugify from 'slugify';

export const getSlugifyLink = (title: string) => {
  return slugify(title, {
    lower: true,
  }).replace(/:/g, '');
};

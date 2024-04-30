export type Image = {
  src: string;
  alt: string;
};

export type Item = {
  id: number;
  content: string;
};

export type BaseState = {
  isPending: boolean;
  error: null | string;
};

export type StrapiImage = {
  data: {
    attributes: {
      url: string;
    };
  };
};

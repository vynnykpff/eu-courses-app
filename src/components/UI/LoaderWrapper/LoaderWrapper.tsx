import { Loader } from '@components';
import { ReactNode } from 'react';

type Props = {
  isPending: boolean;
  children: ReactNode;
};

export const LoaderWrapper = ({ isPending, children }: Props) => {
  return <>{isPending ? <Loader /> : children}</>;
};

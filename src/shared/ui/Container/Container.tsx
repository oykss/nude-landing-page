import clsx from 'clsx';
import type { ReactNode } from 'react';
import css from './Container.module.css';

type PropsContainer = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: PropsContainer) {
  return <div className={clsx(css.container, className)}>{children}</div>;
}

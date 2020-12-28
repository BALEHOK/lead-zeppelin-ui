import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import { theme } from 'src/app/theme';

interface IProps {
  children: ReactNode;
  className?: string;
  href: string;
}

export const LinkForANewTab = ({ children, className, href }: IProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={classNames(useStyles().link, className)}
  >
    {children}
  </a>
);

const useStyles = createUseStyles({
  link: {
    color: theme.global.colors.text.dark,
  },
});

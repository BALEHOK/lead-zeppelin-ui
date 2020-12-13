import React, { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import { theme } from 'src/app/theme';

interface IProps {
  children: ReactNode;
  href: string;
}

export const LinkForANewTab = ({ children, href }: IProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={useStyles().link}
  >
    {children}
  </a>
);

const useStyles = createUseStyles({
  link: {
    color: theme.global.colors.text.dark,
  },
});

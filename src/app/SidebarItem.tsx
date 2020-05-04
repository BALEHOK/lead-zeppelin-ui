import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SidebarItem.module.scss';

interface IProps {
  icon: React.ReactNode;
  to: string;
  label: string;
}
export const SidebarItem = ({ icon, to, label }: IProps) => (
  <NavLink
    className={styles.root}
    activeClassName={styles.active}
    to={to}
    exact
  >
    {icon}
    <div className={styles.gap} />
    {label}
  </NavLink>
);

export default SidebarItem;

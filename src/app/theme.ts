import { dark } from 'grommet/themes';
import styles from './theme.module.scss';

const colors = {
  active: styles.active,
  background: styles.background,
  black: styles.black,
  brand: styles.brand,
  control: {
    dark: styles.controlDark,
    light: styles.controlLight,
  },
  focus: styles.focus,
  icon: {
    dark: styles.iconDark,
    light: styles.iconLight,
  },
  placeholder: styles.placeholder,
  text: {
    dark: styles.textDark,
    light: styles.textLight,
  },
  white: styles.white,
};

const theme = {
  ...dark,
  global: { ...dark.global, colors },
  layer: { ...dark.layer, background: colors.background },
};

export { theme };

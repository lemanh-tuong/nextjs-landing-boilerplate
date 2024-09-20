import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import styles from './ButtonPrimary.module.css';

interface Props extends PropsWithChildren {
  className?: string;
  contentClassName?: string;
  isLight?: boolean;
  onClick?: () => void;
}

export const ButtonPrimary: FC<Props> = ({ children, className, contentClassName, isLight, onClick }) => {
  return (
    <div className={classNames(styles.container, className)} onClick={onClick}>
      <div className={styles.border}></div>
      <div className={classNames(styles.inner, isLight ? styles.innerLight : '')}>
        <div className={classNames(styles.content, contentClassName)}>{children}</div>
      </div>
    </div>
  );
};

import React from 'react'
import classNames from 'classnames';
import styles from './styles.module.css';

interface IButton {
  label: string;
  onClick: () => void;
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
  className?: string;
  disabled?: boolean;
}

export const Button = ({
  label,
  onClick,
  type,
  className,
  disabled,
}: IButton) => {
  return (
    <button
      className={
        classNames(
          styles.button,
          {
            [styles.default]: type === undefined || type === 'default',
            [styles.primary]: type === 'primary',
            [styles.success]: type === 'success',
            [styles.warning]: type === 'warning',
            [styles.danger]: type === 'danger',
            [styles.disabled]: disabled
          },
          className
        )
      }
      onClick={!disabled && onClick}
    >
      {label}
    </button>
  );
}
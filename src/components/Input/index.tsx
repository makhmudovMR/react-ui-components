import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';

interface IInput {
  type: string;
  value?: string;
  onChange?: () => void,
  disabled?: boolean,
  prefix?: JSX.Element,
  suffix?: JSX.Element
  prepend?: string;
  append?: string;
}

export const Input = ({
  type,
  value,
  onChange,
  disabled,
  prefix,
  suffix,
  prepend,
  append,
  ...props
}: IInput) => {

  const prefixTag = prefix && (
    <div className={styles.prefix}>
      {prefix}
    </div>
  );

  const suffixTag = suffix && (
    <div className={styles.suffix}>
      {suffix}
    </div>
  );

  const prependTag = prepend && (
    <div className={styles.prepend}>
      {prepend}
    </div>
  )

  const appendTag = append && (
    <div className={styles.append}>
      {append}
    </div>
  )

  return (
    <div className={
      classNames(
        styles.wrapper,
        {
          [styles.inline_table]: prepend || append
        }
      )
    }>
      {prefixTag}
      {suffixTag}
      {prependTag}
      <input
        className={classNames(
          styles.input,
          {
            [styles.disabled]: disabled
          },
          {
            [styles.pl]: prefix,
          },
          {
            [styles.pr]: suffix,
          },
          {
            [styles.border_left_none]: prependTag
          },
          {
            [styles.border_right_none]: prependTag
          }
        )}
        type={type}
        onChange={onChange}
        value={value}
        {...props}
      />
      {appendTag}

    </div>
  )
}

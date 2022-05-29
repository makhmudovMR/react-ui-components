import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';

interface ISelect {
  options: [],
  placeholder: '',
  value?: string,
  setValue?: (value: string) => {},
}

const defaultProps = {
  options: [],
  placeholder: '',
  value: '',
  setValue: (value) => {}
} as ISelect

const Select = ({
  options,
  placeholder,
  value,
  setValue,
}: ISelect) => {

  const [isHide, setIsHide] = useState(true);
  const [label, setLabel] = useState(placeholder);

  const items = options.map((item: any) => {
    return (
      <div
        className={styles.select_box_item}
        onClick={() => {
          console.log(item.label);
          setValue(item.value);
          setLabel(item.label);
          setIsHide(true)
        }}
      >
        {item.label}
      </div>
    )
  })

  return (
    <div className={styles.select_wrapper}>
      <div className={styles.select} onClick={() => setIsHide(!isHide)}>
        {label}
      </div>
      <div
        className={
          classNames(styles.select_box, {
            [styles.select_box_hide]: isHide,
          })
        }
      >
        {items}
      </div>
    </div>
  )
}

Select.defaultProps = defaultProps;
export { Select }
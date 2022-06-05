import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';

export const Datepicker = () => {

  const [isDark, setIsDark] = useState(false);

  return (
    <div className={styles.calendar}>
      <div className={styles.calendar_header}>
        <div className={styles.month_picker}>
          February
        </div>
        <div className={styles.year_picker}>
          <span className={styles.year_changer}>{'<'}</span>
          <span className={styles.year}>2021</span>
          <span className={styles.year_changer}>{'>'}</span>
        </div>
      </div>

      <div className={styles.calendar_body}>
        <div className={styles.calendar_week_day}>
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        <div className={styles.calendar_days}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>

          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
        </div>
      </div>

      <div className={styles.calendar_footer}>
        <span>Dark Mode</span>
        <div className={classNames(styles.dark_mode_switch, {
          [styles.dark_mode_switch_switched]: isDark
        })} onClick={() => setIsDark(!isDark)}>
          <div
            className={classNames(styles.dark_mode_switch_ident, {
              [styles.dark_mode_switch_ident_switched]: isDark
            })}
          ></div>
        </div>
      </div>

      <div className={styles.month_list}></div>
    </div>
  )
}

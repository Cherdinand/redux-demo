import React from 'react';
import classnames from 'classnames';
import { activeList } from 'utils';

import styles from './index.scss';

const filters = ["All","Active","Completed"];

export default ({todoList, filterState, toggleFilter}) => {
  const list = activeList(todoList);
  return (
    <div className={styles.wrapper}>
      <span className={styles.left}>{list.length} items left</span>
      {
        filters.map(filter => {
          return (
            <span
              key={filter}
              className={classnames(styles.filter, {[styles.active]: filterState === filter})}
              onClick={toggleFilter.bind(this,filter)}
            >
                {filter}
            </span>
          )
        })
      }
    </div>
  )
}

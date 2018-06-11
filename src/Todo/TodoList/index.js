import React from 'react';
import TodoItem from '../TodoItem';
import { filterList } from 'utils';
import styles from './index.scss';

export default ({todoList, toggleCheck, removeItem, filter}) => {
  const list = filterList(todoList, filter);
  return (
    <div className={styles.wrapper}>
      {
        list.length ? list.map(item => {
          return (
            <TodoItem
              key={item.value}
              item={item}
              toggleCheck={toggleCheck}
              removeItem={removeItem}
            />
          )
        }) : <div className={styles.noList}>there is no todo currently !</div>
      }
    </div>
  )
}

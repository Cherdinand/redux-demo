import React from 'react';
import { Checkbox, Icon } from 'antd';
import styles from './index.scss';

export default ({item, toggleCheck, removeItem}) => {
  return (
    <div className={styles.wrapper}>
      <Checkbox className={styles.checked} onChange={toggleCheck.bind(this,item)} checked={item.checked}/>
      <span className={styles.value}>{item.value}</span>
      <Icon className={styles.close} type="close" onClick={removeItem.bind(this,item)}/>
    </div>
  )
}

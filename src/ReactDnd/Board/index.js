import React, {Component} from 'react';
import classnames from 'classnames';
import Grid from '../Grid';

import styles from './index.scss';
import {calcRowGroup} from "src/utils";



export default class Board extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        {
          grids.map((grid,i) => {
            return (
              <Grid key={`${grid}${i}`} position={grid}/>
            )
          })
        }
      </div>
    )
  }
}

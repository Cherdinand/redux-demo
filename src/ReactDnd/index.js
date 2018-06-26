import React, {Component} from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Grid from './Grid';

import { calcRowGroup } from '../utils';


import styles from './index.scss';
import Knight from "src/ReactDnd/Knight";

const arr = Array.from({length: 64}, (x,i) => i + 1);
const grids = calcRowGroup(arr,8);

@DragDropContext(HTML5Backend)
export default class ReactDnd extends Component {
  state = {
    knightPosition: [5,4]
  }
  
  handleState = (item) => {
    this.setState({
    
    })
  }
  
  render() {
    const { knightPosition } = this.state;
    
    return (
      <div className={styles.wrapper}>
        {
          grids.map((grid,i) => {
            const knight = (grid[0] === knightPosition[0]) && (grid[1] === knightPosition[1]);
            const color = (knightPosition[0] % 2 === 1 && knightPosition[1] % 2 === 1) || (knightPosition[0] % 2 === 0 && knightPosition[1] % 2 === 0) ? "#000" : "#fff";
            const bgColor = (grid[0] % 2 === 1 && grid[1] % 2 === 1) || (grid[0] % 2 === 0 && grid[1] % 2 === 0) ? "#fff" : "#000";
            return (
              <Grid key={`${grid}${i}`} bgColor={bgColor} handleState={this.handleState}>
                {
                  knight && <Knight color={color}/>
                }
              </Grid>
            )
          })
        }
      </div>
    )
  }
}

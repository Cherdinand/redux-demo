import React, {Component} from 'react';
import ItemType from '../ItemType';

import {
  DropTarget,
} from 'react-dnd';

import styles from './index.scss';


const squareTarget = {
  canDrop(props, monitor) {
    // return canMoveKnight(props.x, props.y)
    // console.log('canDrop props', props);
    // props.handleState()
    return true;
  },
  drop(props, monitor) {
    // moveKnight(props.x, props.y)
    console.log('drop props', props);
    props.handleState(monitor.getItem())
  },
}

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: !!monitor.isOver(),
    canDrop: !!monitor.canDrop(),
  }
}

@DropTarget(ItemType.KNIGHT, squareTarget, collect)

export default class Grid extends Component {
  render() {
    const { connectDropTarget, bgColor } = this.props;
    // console.log('grid this.props', position);
    return connectDropTarget(
      <div
        className={styles.grid}
        style={{
          backgroundColor: bgColor
        }}
      >
        { this.props.children }
      </div>
    )
  }
}

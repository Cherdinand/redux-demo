import React, {Component} from 'react';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input, Checkbox, message } from 'antd';

import * as actions from './action';
import styles from './index.scss';

@connect((state) => {
  return {
    TodoReducer: state.TodoReducer
  }
},(dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
})

export default class Todo extends Component {
  state = {
    filter: "All"
  }
  
  addItem = (e) => {
    const value = e.target.value.trim();
    value ? this.props.actions.addItem(value) : message.warning("输入不能为空", 1)
  };
  
  toggleAll = () => {
    this.props.actions.toggleAll(this.checkbox.rcCheckbox.input.checked)
  };
  
  toggleCheck = (item) => {
    this.props.actions.toggleCheck(item);
  };
  
  removeItem = (item) => {
    this.props.actions.removeItem(item);
  };
  
  toggleFilter = (filter) => {
    this.setState({ filter })
  };
  
  render() {
    const { todoList } = this.props.TodoReducer;
    
    return (
      <div className={styles.wrapper}>
        <Input
          size="large"
          placeholder="please input todo"
          onPressEnter={this.addItem}
          addonBefore={
            <Checkbox
              ref={ele => this.checkbox = ele}
              onChange={this.toggleAll}
            />
          }
        />
        
        <TodoList
          todoList={todoList}
          toggleCheck={this.toggleCheck}
          removeItem={this.removeItem}
          filter={this.state.filter}
        />
        
        <TodoFilter
          toggleFilter={this.toggleFilter}
          filterState={this.state.filter}
          todoList={todoList}
        />
      </div>
    )
  }
}

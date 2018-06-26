import React, {Component} from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

import Todo from "src/Todo";
import ReactDnd from "src/ReactDnd";
import Home from "src/Home";

import styles from './index.scss';


@hot(module)
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className={styles.container}>
          <BrowserRouter>
            <Switch>
              <Route path="/todo" component={Todo}/>
              <Route path="/dnd" component={ReactDnd}/>
              <Route path="/" component={Home}/>
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

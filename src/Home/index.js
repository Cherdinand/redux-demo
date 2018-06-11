import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import styles from './index.scss';

const navs = ["todo"];
export default class Home extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        {
          navs.map(nav => {
            return (
              <Link key={nav} to={nav}>{nav}</Link>
            )
          })
        }
      </div>
    )
  }
}

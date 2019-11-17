import React from 'react'
import ReactDOM from 'react'
import { Button } from 'antd'

import './app.less'
import styles from './app.module.less'

export default class App extends React.Component {
  render() {
    return (
      <>
        <div className="title">Test</div>
        <div className={styles.size}>
          Body
          <div className="body-title">BodyTitle</div>
        </div>
        <Button>Button</Button>
      </>
    )
  }
}
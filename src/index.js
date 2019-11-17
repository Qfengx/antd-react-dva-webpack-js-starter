
import React from 'react'
import ReactDOM from 'react-dom'
import { Modal } from 'antd'
import dva from 'dva'
import createLoading from 'dva-loading'
const createHistory = require("history").createBrowserHistory


import './global.less'

import App from './app'

const app = dva({
  ...createLoading({
    effects: true
  }),
  history: createHistory(),
  onError: error => {
    if (error.success) {
      Modal.error({
        title: '错误信息提示',
        content: error.message,
        okText: '确定'
      })
    } else {
      if (error && error.message !== 'Not Found') {
        const item = error.message === 'Gateway Timeout'
          ? '请求链接超时' : error.message
        Modal.error({
          title: '错误信息提示',
          content: item,
          okText: '确定'
        })
      }
    }
  }
})

app.use({})

app.model(require('./models/app').default)

app.router(require('./router').default)

app.start('#root')

// ReactDOM.render(<App />, document.getElementById('root'))
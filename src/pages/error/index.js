import React from 'react'
import styles from './index.module.less'
import errorImg from '../../../public/images/404-01.png'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="content-inner">
      <div className={styles.error}>
        <img src={imgError} /><br /><br />
        &nbsp;<span>哎呀......页面不存在</span><br />
        &nbsp;&nbsp;<Link to={"/dashboard"}>返回首页</Link><span>，让我们从新来过。</span>
      </div>
    </div>
  )
}

export default Error
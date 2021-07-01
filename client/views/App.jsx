import React from 'react'
import { Link } from 'react-router-dom'
import Routes from '../config/router'

const App = () => (
  <div>
    <Link to="/">首页</Link>
    <br />
    <Link to="/detail">详情页</Link>
    <Routes />
  </div>
)

export default App

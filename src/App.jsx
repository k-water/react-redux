import React, { Component } from 'react'
import Hello from './components/Hello'
import logo from './assets/logo.svg'
import './App.css'

import { addTodo, toggleTodo, setVisibilityFilter } from './redux/actions'
import { bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'
import * as CounterActions from '$redux/actions'
import configureStore from '$redux/store/configureStore'

const store = configureStore()
// console.log(store.getState())
// // 每次 state 更新时，打印日志
// // 注意 subscribe() 返回一个函数用来注销监听器
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// )

// // 发起一系列 action
// store.dispatch(addTodo('Learn about actions'))
// store.dispatch(addTodo('Learn about reducers'))
// store.dispatch(addTodo('Learn about store'))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))
export default class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo shake-rotate' alt='logo' />
        </div>
        <Hello />
      </div>
    )
  }
}

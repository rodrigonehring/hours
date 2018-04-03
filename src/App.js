import React, { Component } from 'react'
import './App.css'
import InputTime from './components/InputTime'

class App extends Component {
  render() {
    return (
      <div className="App">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <InputTime value="" />
        <br />
        <br />
        <InputTime value="15:40" />
      </div>
    )
  }
}

export default App

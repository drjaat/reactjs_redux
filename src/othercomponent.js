import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class othercomponent extends Component {
  render() {
    return ReactDOM.createPortal(
      <h1>Other Component</h1>,
      document.getElementById('other-root')
    )
  }
}

export default othercomponent

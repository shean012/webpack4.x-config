import React, { Component } from 'react';

class ReactApp extends Component {
  render () {
    this.state = {
      title: 'hey react 根组件'
    }
    return (
      <div>
        <h3>{this.state.title}</h3>
      </div>
    )
  }
}
export default ReactApp

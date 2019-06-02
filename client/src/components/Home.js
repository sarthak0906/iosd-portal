import React, { Component } from 'react'
import Content from './layout/Content';
import Footer from './layout/Footer'

export default class Home extends Component {
  render() {
    return (
      <div>
        <Content />
        <Footer/>
      </div>
    )
  }
}

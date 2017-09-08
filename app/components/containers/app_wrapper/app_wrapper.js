import React, { Component } from 'react'
import styles from './app_wrapper.scss'
import connect from 'Redux/connect'

class AppWrapper extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={styles.appContainer}>
        { this.props.children }
      </div>
    )
  }
}

export default connect(AppWrapper)

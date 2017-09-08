// Import main dependencies
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// Import store
import store from 'Redux/store'
import connect from 'Redux/connect'

// Import global styles
import styles from 'Styles/global.scss'

// Components

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        Studeamus dictionary app.
      </div>
    )
  }
}

const ConnectedApp = connect(App)

ReactDOM.render(
  (
    <Provider store={store}>
      <ConnectedApp/>
    </Provider>
  ),
  document.getElementById('root')
)

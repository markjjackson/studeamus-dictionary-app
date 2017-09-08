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
import Wrapper from 'Components/containers/app_wrapper/app_wrapper'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Wrapper>
          Studeamus dictionary app.
        </Wrapper>
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

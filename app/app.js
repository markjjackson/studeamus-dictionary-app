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
import WordSearch from 'Components/inputs/word_search/word_search'
import Result from 'Components/result/result'

const mapResults = words => words.map((word, i) => <Result word={word} key={i}/>)

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { dictionary } = this.props
    return (
      <div>
        <Wrapper>
          Studeamus dictionary app.
          <WordSearch/>
          { mapResults(dictionary) }
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

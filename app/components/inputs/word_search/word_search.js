import React, { Component } from 'react'
import styles from './word_search.scss'
import connect from 'Redux/connect'

class WordSearch extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <input className={styles.searchInput}
        type="text"
        placeholder="Zoek voor een woord"
      />
    )
  }
}

export default connect(WordSearch)

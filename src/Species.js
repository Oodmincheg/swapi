import React, { Component } from 'react'
import {SPECIES_URL} from './urls'
import ListContainer from './components/ListContainer'

 class Species extends Component {
     
  render() {
    return (
      <div>
        <h1>Species</h1>
        <ListContainer url={SPECIES_URL} />
      </div>
    )
  }
}

export default Species;
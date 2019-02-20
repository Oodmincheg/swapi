import React, { Component } from 'react'
import {PLANETS_URL} from './urls'
import ListContainer from './ListContainer'

 class Planets extends Component {
     
  render() {
    return (
      <div>
        <h1>Planets</h1>
        <ListContainer url={PLANETS_URL} />
      </div>
    )
  }
}

export default Planets;
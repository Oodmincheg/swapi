import React, { Component } from 'react'
import {VEHICLES_URL} from './urls'
import ListContainer from './ListContainer'

 class Vehicles extends Component {
     
  render() {
    return (
      <div>
        <h1>Vehicles</h1>
        <ListContainer url={VEHICLES_URL} />
      </div>
    )
  }
}

export default Vehicles;
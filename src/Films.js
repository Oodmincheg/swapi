import React, { Component } from 'react'
import {FILMS_URL} from './urls'
import ListContainer from './ListContainer'

 class Films extends Component {
     
  render() {
    return (
      <div>
        <h1>Films</h1>
        <ListContainer url={FILMS_URL} title="title"/>
      </div>
    )
  }
}

export default Films;
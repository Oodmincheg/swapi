import React, { Component } from 'react'

class Pagination extends Component {
    handleNext = () => {
        this.props.onClick(this.props.nextPage, this.props.currentPage + 1)
    }
    handlePrev = () => {
        this.props.onClick(this.props.prevPage, this.props.currentPage - 1)
    }
  render() {
      const {currentPage, nextPage, prevPage} = this.props
    return (
      <div>
        {prevPage ? <span onClick={this.handlePrev}>previous</span> : ''}
        <span>{currentPage}</span>
        {nextPage ? <span onClick={this.handleNext}>next</span> : ''}
      </div>
    )
  }
}

export default Pagination;
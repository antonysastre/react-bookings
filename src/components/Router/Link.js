import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'

export class Link extends Component {

  handleClick = (evt) => {
    evt.preventDefault()
    this.context.handleClick(this.props.to)
  }

  render() {
    const activeClass = this.context.route === this.props.to ? 'active' : ''
    return ( <Button
                onClick={this.handleClick}
                className={activeClass + ' btn-link'}>{this.props.children}</Button> )
  }
}

Link.Proptypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node
}

Link.contextTypes = {
  handleClick: PropTypes.func,
  route: PropTypes.string
}
